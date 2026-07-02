export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster: string;
  backdrop: string;
  rating: number;
  release_date: string;
  runtime: number;
  genres: string[];
}

export interface Character {
  id: number;
  name: string;          // Actor Name
  character: string;     // Character Name
  profile: string | null;
}