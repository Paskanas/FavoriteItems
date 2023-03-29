import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import CardContainer from '@/Components/CardContainer';
import { useEffect, useState } from 'react';
import { Item } from '@/types/index';

export default function Welcome({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    const [allITems, setAllItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch('/api/items')
            .then(response => response.json())
            .then(data => setAllItems(data));
    }, [setAllItems])

    const updateItems = (updatedItems: Item[]) => {
        setAllItems(updatedItems);
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
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
                <div className='mt-5'>
                    <CardContainer auth={auth}
                        items={allITems}
                        showFavorites={false}
                        updateItems={updateItems}
                        showButtons={false}
                    />
                </div>
            </div>
        </>
    );
}
