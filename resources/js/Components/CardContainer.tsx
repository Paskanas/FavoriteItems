import { CardContainerProps, FunctionData, Item } from '@/types/index';
import { useEffect, useState, FC } from 'react'
import Card from './Card';
import CardsFilter from './CardsFilter';
import { getFavoriteItems, deleteFavoriteItem } from '../services/api';

const CardContainer: FC<CardContainerProps> = ({ items, auth, showFavorites, updateItems, showButtons }) => {

  const [favoriteItemsIds, setFavoriteItemsIds] = useState<number[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  !showFavorites && auth.user &&
    useEffect(() => {
      const fetchFavoriteItems = async () => {
        try {
          const favoriteItems = await getFavoriteItems(auth.user.id);
          const favoriteItemsIds = favoriteItems.map((favorite: any) => favorite.id);
          setFavoriteItemsIds(favoriteItemsIds);
        } catch (error) {
          console.error('Error fetching favorite items', error);
        }
      };
      fetchFavoriteItems();
    }, [auth.user.id, setFavoriteItemsIds]);

  const handleRemoveFromFavoriteItems = async (data: FunctionData) => {
    try {
      await deleteFavoriteItem(auth.user.id, data.id);
      if (showFavorites) {
        const updatedItems = items.filter(item => item.id !== data.id);
        updateItems(updatedItems);
      } else {
        const updatedFavoriteItems = favoriteItemsIds.filter(id => id !== data.id);
        setFavoriteItemsIds(updatedFavoriteItems);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white }`}>
      <div className="container mx-auto px-4 py-8">
        <div className='flex gap-4'>
          <h1 className="text-3xl font-bold mb-4 uppercase">Items</h1>
          <CardsFilter setFilteredItems={setFilteredItems}
            items={items}
          />
        </div>
        {!auth.user &&
          <div className='text-gray-600 dark:text-gray-400'>
            <p>Please login to choose your favorite items</p>
          </div>
        }
        <div className="flex flex-wrap -mx-4">
          {filteredItems.map(item => (
            <Card key={item.id}
              item={item}
              showFavorites={showFavorites}
              favoriteItemsIds={favoriteItemsIds}
              setFavoriteItemsIds={setFavoriteItemsIds}
              auth={auth}
              handleRemoveFromFavoriteItems={handleRemoveFromFavoriteItems}
              showButtons={showButtons}
              editPage={false}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardContainer
