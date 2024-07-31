export interface IFavorites {
  isLoading: boolean;
  status: string | null;
  errorCode: number;
  data: FavoriteList[] | null;
}
interface FavoriteList {
  favoriteApiId: string;
  name: string;
  crest: string;
}
