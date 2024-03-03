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
  favouriteName: string;
  favouriteApiId: string;
};

export type AuthState = {
  user: User | null;
  isLoading: boolean;
  status: string;
};
