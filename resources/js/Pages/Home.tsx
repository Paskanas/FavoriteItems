import { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, Item } from '@/types/index';
import CardContainer from '@/Components/CardContainer';
import { getAllItems } from '@/services/api';

const Home = ({ auth }: PageProps) => {
  const [allITems, setAllItems] = useState<Item[]>([]);

  const updateItems = (updatedItems: Item[]) => {
    setAllItems(updatedItems);
  };

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const response = await getAllItems();
        setAllItems(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllItems();
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

export default Home