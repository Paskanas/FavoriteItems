import React from 'react'
import { CardButtonProps } from '@/types/index';

const CardButton : React.FC<CardButtonProps> = ({item,showFavorites,favoriteItems,setFavoriteItems,auth,handleRemoveFromFavoriteItems}) => {

  const handleAddToFavoriteItems = (itemId: number) => {
    fetch('/api/add-favorite-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({item:itemId, user:auth.user.id}),
    })
    .then(response =>response.json())
    .then(_ => {
      setFavoriteItems([...favoriteItems,itemId])
    })
    .catch((error)=> console.error(error));
  }
  
  const isFavorite = (itemId: number) => {
    if(showFavorites){
      return true;
    }
    return favoriteItems.includes(itemId);
  }

  return (
    <>{!showFavorites&&
      <button className={`bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ${isFavorite(item.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isFavorite(item.id)}
        onClick={()=>handleAddToFavoriteItems(item.id)}>
          {isFavorite(item.id)?'Already added':'Add to favorites'}
      </button>}
      {isFavorite(item.id)&&
      <button className={`bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded }`}
        onClick={()=>handleRemoveFromFavoriteItems(item.id)}>
          Remove from favorites
      </button>}
    </>
  )
}

export default CardButton
