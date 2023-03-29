export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export interface Item {
    id: number;
    title: string;
    year: number;
    genre: string;
    duration_in_minutes: number;
  }

export interface CardContainerProps extends PageProps {
      items: Item[];
      showFavorites:boolean;
      updateItems: (updatedItems: Item[]) => void;
      showButtons:boolean;
    }

export interface CardProps extends PageProps {
    item: Item;
    showFavorites: boolean;
    favoriteItems: number[];
    setFavoriteItems: React.Dispatch<React.SetStateAction<number[]>>;
    handleRemoveFromFavoriteItems: (id: number) => void;
    showButtons:boolean;
  }


  export interface CardButtonProps extends PageProps {
    item: Item;
    showFavorites: boolean;
    favoriteItems: number[];
    setFavoriteItems: React.Dispatch<React.SetStateAction<number[]>>;
    handleRemoveFromFavoriteItems: (id: number) => void;
  }