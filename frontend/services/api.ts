const API_BASE_URL = "http://127.0.0.1:8000";

export async function searchMovie(query: string) {
  const response = await fetch(
    `${API_BASE_URL}/movie/${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie.");
  }

  return response.json();
}

export async function getTrendingMovies() {
  const response = await fetch(
    `${API_BASE_URL}/trending`
  );

  if (!response.ok) {
    throw new Error("Failed to load trending movies.");
  }

  return response.json();
}
export async function getMovieDetails(movieId: number) {
  const response = await fetch(
    `${API_BASE_URL}/details/${movieId}`
  );

  if (!response.ok) {
    throw new Error("Failed to load movie details.");
  }

  return response.json();
}
export async function getMovieCast(movieId: number) {
  const response = await fetch(
    `${API_BASE_URL}/cast/${movieId}`
  );

  if (!response.ok) {
    throw new Error("Failed to load cast.");
  }

  return response.json();
}