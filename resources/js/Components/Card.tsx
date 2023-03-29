import React from 'react';
import { CardProps } from '@/types/index';
import CardButton from './CardButton';

const Card: React.FC<CardProps> = ({ item, showFavorites, favoriteItems, setFavoriteItems, auth, handleRemoveFromFavoriteItems, showButtons }) => {

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
      <div className={`bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden }`}>
        <div className="px-4 py-3">
          <h2 className="text-lg font-bold mb-2">{item.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.year} | {item.genre} | {item.duration_in_minutes} mins</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3">
          {showButtons && <CardButton item={item}
            showFavorites={showFavorites}
            favoriteItems={favoriteItems}
            setFavoriteItems={setFavoriteItems}
            auth={auth}
            handleRemoveFromFavoriteItems={handleRemoveFromFavoriteItems}
          />}
        </div>
      </div>
    </div>
  )
}

export default Card
