import { CardContainerProps, Item} from '@/types/index';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import CardsFilter from './CardsFilter';

const CardContainer:React.FC<CardContainerProps> = ({items, auth,showFavorites,updateItems,showButtons}) => {

  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  !showFavorites && auth.user&&
  useEffect(()=>{
    fetch(`/api/favorite-items/${auth.user.id}`)
    .then(response => response.json())
    .then(data => setFavoriteItems(data.map((favorite: any)=> favorite.id)));
  },[setFavoriteItems])

  const handleRemoveFromFavoriteItems = (itemId: number) => {
    fetch(`/api/favorite-items/${auth.user.id}/${itemId}`, {
      method: 'DELETE',
    })
    .then(response =>response.json())
    .then(_ => {
      if(showFavorites){
        const updatedItems = items.filter(item => item.id !== itemId);
        updateItems(updatedItems);
      }
        else {
          const updatedFavoriteItems = favoriteItems.filter(id => id !== itemId);
          setFavoriteItems(updatedFavoriteItems);}
    })
    .catch((error)=> console.error(error));
  }
  
  return (
    <div className={`bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white }`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Items</h1>
        <CardsFilter setFilteredItems={setFilteredItems}
                     items={items}
        />
        <div className="flex flex-wrap -mx-4">
          {filteredItems.map(item => (
            <Card key={item.id} 
            item={item} 
            showFavorites={showFavorites}
            favoriteItems={favoriteItems}
            setFavoriteItems={setFavoriteItems}
            auth={auth}
            handleRemoveFromFavoriteItems={handleRemoveFromFavoriteItems}
            showButtons={showButtons}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardContainer
