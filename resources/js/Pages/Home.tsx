import { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, Item } from '@/types/index';
import CardContainer from '@/Components/CardContainer';

const Items = ({ auth }: PageProps) => {
  const [allITems, setAllItems] = useState<Item[]>([]);

  const updateItems = (updatedItems: Item[]) => {
    setAllItems(updatedItems);
  };

  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => setAllItems(data));
  }, [setAllItems])


  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Home</h2>}>
      <Head title="Home" />
      <CardContainer auth={auth} items={allITems} showFavorites={false} updateItems={updateItems} showButtons={true} />
    </AuthenticatedLayout>
  )
}

export default Items