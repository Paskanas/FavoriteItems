import { Item } from '@/types/index';
import React, { useEffect, useState } from 'react'

interface CardsFilter {
  setFilteredItems:React.Dispatch<React.SetStateAction<Item[]>>;
  items:Item[];
}

const CardsFilter:React.FC<CardsFilter> = ({setFilteredItems,items}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(()=>{
    if(searchQuery.trim()){
    setFilteredItems(items.filter(item=>
      item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())||
      item.year.toString().includes(searchQuery.trim())||
      item.genre.toLowerCase().includes(searchQuery.trim().toLowerCase())||
      item.duration_in_minutes.toString().includes(searchQuery.trim())
    )
    )} else {
      setFilteredItems(items);
    }
  },[searchQuery,items])


  return (
    <div className='text-black mb-6'>
          <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search items" />
        </div>
  )
}

export default CardsFilter
