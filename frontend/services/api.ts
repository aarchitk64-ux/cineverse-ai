import type {
  Movie,
  MovieDetails,
  Character,
} from "@/types/movie";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API Error (${response.status})`);
  }

  return response.json() as Promise<T>;
}

interface CharacterAnalysisResponse {
  character: {
    actor_name: string;
    character_name: string;
    movie_title: string;
    profile: string | null;
  };
  analysis: {
    background: string;
    personality: string;
    motivations: string;
    relationships: string;
    timeline: string;
    strengths: string;
    weaknesses: string;
  };
}

export async function searchMovie(
  query: string
): Promise<Movie> {
  return fetchData<Movie>(
    `/movie/${encodeURIComponent(query)}`
  );
}

export async function getTrendingMovies(): Promise<Movie[]> {
  return fetchData<Movie[]>("/trending");
}

export async function getMovieDetails(
  movieId: number
): Promise<MovieDetails> {
  return fetchData<MovieDetails>(
    `/details/${movieId}`
  );
}

export async function getMovieCast(
  movieId: number
): Promise<Character[]> {
  return fetchData<Character[]>(
    `/cast/${movieId}`
  );
}

export async function getCharacterAnalysis(
  movieId: number,
  personId: number
): Promise<CharacterAnalysisResponse> {
  return fetchData<CharacterAnalysisResponse>(
    `/character/${movieId}/${personId}`
  );
}