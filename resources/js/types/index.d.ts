export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  role: number;
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
  imdb: number;
  type: string;
  img_url: string;
}

export interface FunctionData {
  id: number;
  title?:string;
}

export interface CardContainerProps extends PageProps {
  items: Item[];
  showFavorites: boolean;
  updateItems: (updatedItems: Item[]) => void;
  showButtons: boolean;
}

export interface CardProps extends PageProps {
  item: Item;
  showFavorites: boolean;
  favoriteItemsIds: number[];
  setFavoriteItemsIds: React.Dispatch<React.SetStateAction<number[]>>;
  handleRemoveFromFavoriteItems: (data: FunctionData) => void;
  showButtons: boolean;
  editPage: boolean;
}


export interface CardButtonProps {
  item: Item;
  handleButtonClick: (data:FunctionData) =>void;
  //1-Remove, 2-Add, 3-Renew, 4-Edit, 5-Save
  buttonId: number;
}