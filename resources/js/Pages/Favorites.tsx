import { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, Item } from '@/types/index';
import CardContainer from '@/Components/CardContainer';

const Items = ({ auth }: PageProps) => {
  const [allFavoriteItems, setAllFavoriteItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch(`/api/favorite-items/${auth.user.id}`)
      .then(response => response.json())
      .then(data => setAllFavoriteItems(data));
  }, [setAllFavoriteItems])

  const updateItems = (updatedItems: Item[]) => {
    setAllFavoriteItems(updatedItems);
  };


  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">My favorites</h2>}>
      <Head title="Favorites" />
      <CardContainer auth={auth} items={allFavoriteItems} showFavorites={true} showButtons={true} updateItems={updateItems} />
    </AuthenticatedLayout>
  )
}

export default Items