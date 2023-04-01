import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import CardContainer from '@/Components/CardContainer';
import { useEffect, useState } from 'react';
import { Item } from '@/types/index';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { getAllItems } from '../services/api';

export default function Welcome({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    const [allItems, setAllItems] = useState<Item[]>([]);

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
    }, [setAllItems]);

    const updateItems = (updatedItems: Item[]) => {
        setAllItems(updatedItems);
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className='flex flex-row justify-between'>
                    <Link href="/" className='p-3'>
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                    </Link>
                    <div className='flex py-4 ml-5 '>
                        <h1 className='text-white text-3xl'>All items</h1>
                    </div>
                    <div className="p-6 text-right">
                        {auth.user ? (
                            <Link
                                href={route('home')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Home
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                <div >
                    <CardContainer
                        auth={auth}
                        items={allItems}
                        showFavorites={false}
                        updateItems={updateItems}
                        showButtons={false}
                    />
                </div>
            </div>
        </>
    );
}
