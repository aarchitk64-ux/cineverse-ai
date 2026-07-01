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