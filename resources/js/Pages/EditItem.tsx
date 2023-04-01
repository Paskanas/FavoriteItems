import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Item, User } from '@/types/index';
import Card from '@/Components/Card';

type EditItemPageProps = {
  item: Item;
  auth: {
    user: User;
  };
};

const EditItem = ({ auth, item }: EditItemPageProps) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit</h2>}>
      <Head title="Edit" />
      <Card item={item}
        showFavorites={false}
        favoriteItemsIds={[item.id]}
        setFavoriteItemsIds={() => { null }}
        auth={auth}
        handleRemoveFromFavoriteItems={() => { null }}
        showButtons={false}
        editPage={true}
      />
    </AuthenticatedLayout>
  )
}

export default EditItem