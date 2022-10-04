export interface GamesResponse {
  id?: string;
  name: string;
  description: string;
  genre: string;
  image: string;
  favorite?: boolean;
}

export interface RegisteredUser {
  id: string,
  fullname: string,
  surname: string,
  password: string,
  favoritesGames?: Array<object>,
}

export interface Genre {
  id: string,
  abreviation?: string,
  genreName: string,
  list?: Array<object>,
}