export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};
export type UserState = {
  user: User | null;
  favourite: Favourite[] | null | undefined;
  token: string | null;
  isLoading: boolean;
  status: string | null;
};
export type Favourite = {
  id: number;
  apiId: string;
  user_id: number;
  name: string;
  img: string;
  isFavourite: boolean;
};
