export type AuthState = {
  user: User | null;
  isLoading: boolean;
  status: string;
  message: string;
  liked: FavoriteList[] | null;
};

interface FavoriteList {
  favoriteApiId: string;
  name: string;
  crest: string;
}

export type User = {
  message: string;
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  image: string;
  favoriteName: string;
  favoriteApiId: string;
};

export type LoginInput = {
  password: string;
  email: string;
  remember: boolean;
};

export type SignUpData = {
  name: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
};
