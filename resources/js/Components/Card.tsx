import React, { useEffect, useState } from 'react';
import { CardProps, FunctionData, Item } from '@/types/index';
import CardButton from './CardButton';
import { addFavoriteItem, getItemImage, updateItem, updateItemPoster } from '@/services/api';

const Card: React.FC<CardProps> = ({ item,
  showFavorites,
  favoriteItemsIds,
  setFavoriteItemsIds,
  auth,
  handleRemoveFromFavoriteItems,
  showButtons,
  editPage = false }) => {

  const [posterUrl, setPosterUrl] = useState<string>(item.img_url);
  const [editItem, setEditItem] = useState<Item>(item);

  const [titleHasValidation, setTitleHasValidation] = useState<boolean>(false);
  const [yearHasValidation, setYearHasValidation] = useState<boolean>(false);
  const [genreHasValidation, setGenreHasValidation] = useState<boolean>(false);
  const [durationHasValidation, setDurationHasValidation] = useState<boolean>(false);
  const [imdbHasValidation, setImdbHasValidation] = useState<boolean>(false);

  const updateItemImage = async (itemId: number, imageUrl: string) => {
    try {
      const data = await updateItemPoster(itemId, imageUrl);
      setPosterUrl(data.imgUrl);
    } catch (error) {
      console.error('Error updating item poster', error);
    }
  }

  const getNewImage = async (data: FunctionData) => {
    if (data.title) {
      try {
        const posterUrl = await getItemImage(data.title);
        updateItemImage(data.id, posterUrl);
      } catch (error) {
        console.error('Error updating item poster', error);
      }
    }
  }

  if (!item.img_url) {
    useEffect(() => {
      getNewImage({ title: item.title, id: item.id });
    })
  }

  const handleAddToFavoriteItems = async (data: FunctionData) => {
    try {
      await addFavoriteItem(data.id, auth.user.id);
      setFavoriteItemsIds([...favoriteItemsIds, data.id]);
    } catch (error) {
      console.error(error);
    }
  };

  const isFavorite = (itemId: number) => {
    if (showFavorites) {
      return true;
    }
    return favoriteItemsIds.includes(itemId);
  };

  const handleSaveChanges = async () => {
    try {
      await updateItem(editItem.id, editItem);
      setTitleHasValidation(false);
      setYearHasValidation(false);
      setGenreHasValidation(false);
      setDurationHasValidation(false);
      setImdbHasValidation(false);
    } catch (validationErrors: any) {
      if (validationErrors) {
        if (validationErrors.title) {
          setTitleHasValidation(true);
        }
        if (validationErrors.year) {
          setYearHasValidation(true);
        }
        if (validationErrors.genre) {
          setGenreHasValidation(true);
        }
        if (validationErrors.duration) {
          setDurationHasValidation(true);
        }
        if (validationErrors.imdb) {
          setImdbHasValidation(true);
        }
      }
    }
  }


  const adminButtons = () => {
    return (auth.user &&
      auth.user.role >= 10 &&
      <a href={route('edit', item)}
        className={"bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 my-1 rounded text-center"}
      >
        Edit
      </a>)
  }

  return (
    <div className={` ${!editPage ? 'w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4' : 'mx-16 mt-4'}`}>
      <div className={'bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col justify-between'}>
        <div className="px-4 py-3">
          {!editPage &&
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
          }
          <div className='flex gap-3'>
            <div className='flex items-center h-auto w-1/3'>
              <img className="w-full max-w-sm rounded" src={posterUrl} alt={item.title} />
            </div>
            {!editPage ?
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Year: {item.year}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Type: {item.type}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Genre: {item.genre}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Duration: {item.duration_in_minutes} mins </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">IMDB rating: {item.imdb}/10</p>
              </div> :
              <div className='flex flex-col justify-between text-black w-full  leading-4'>
                <div className='flex flex-col'>
                  <label className='text-gray-500 dark:text-gray-400' htmlFor="Title">Title</label>
                  <input style={{ backgroundColor: titleHasValidation ? 'red' : 'white' }}
                    className='text-sm'
                    type="text"
                    value={editItem.title}
                    placeholder='Title'
                    onChange={(event) => setEditItem({ ...editItem, title: event.target.value })} />

                  <label className='text-gray-500 dark:text-gray-400' htmlFor="Year">Year</label>
                  <input style={{ backgroundColor: yearHasValidation ? 'red' : 'white' }}
                    className='text-sm'
                    type="number"
                    value={editItem.year}
                    placeholder='Year'
                    onChange={(event) => setEditItem({ ...editItem, year: +event.target.value })} />

                  <label className='text-gray-500 dark:text-gray-400' htmlFor="genre">Genre</label>
                  <input style={{ backgroundColor: genreHasValidation ? 'red' : 'white' }}
                    className='text-sm'
                    type="text"
                    value={editItem.genre}
                    placeholder='Genre'
                    onChange={(event) => setEditItem({ ...editItem, genre: event.target.value })} />

                  <label className='text-gray-500 dark:text-gray-400' htmlFor="Duration">Duration</label>
                  <input style={{ backgroundColor: durationHasValidation ? 'red' : 'white' }}
                    className='text-sm'
                    type="number"
                    value={editItem.duration_in_minutes}
                    placeholder='Duration'
                    onChange={(event) => setEditItem({ ...editItem, duration_in_minutes: +event.target.value })} />

                  <label className='text-gray-500 dark:text-gray-400' htmlFor="IMDB">IMDB rating</label>
                  <input style={{ backgroundColor: imdbHasValidation ? 'red' : 'white' }}
                    className='text-sm' type="number" value={editItem.imdb}
                    placeholder='IMDB rating'
                    onChange={(event) => setEditItem({ ...editItem, imdb: +event.target.value })} />
                </div>
                <div className='flex flex-col'>
                  <CardButton item={editItem}
                    handleButtonClick={handleSaveChanges}
                    buttonId={4}
                  />
                  <CardButton item={editItem}
                    handleButtonClick={getNewImage}
                    buttonId={3}
                  />
                  <a href={route('home')}
                    className={"bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 mt-2 rounded text-center"}
                  >
                    Back
                  </a>
                </div>
              </div>}
          </div>
        </div>
        {showButtons ?
          <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3">
            <div className="flex flex-col">
              {!editPage &&
                showButtons &&
                isFavorite(item.id) ?
                <>
                  <CardButton item={item}
                    handleButtonClick={handleRemoveFromFavoriteItems}
                    buttonId={1}
                  />
                  {adminButtons()}
                </> :
                <>
                  <CardButton item={item}
                    handleButtonClick={handleAddToFavoriteItems}
                    buttonId={2}
                  />
                  {adminButtons()}
                </>
              }
            </div>
          </div>
          : ''}
      </div>
    </div >
  )
}

export default Card
