"use client";

import { useState } from "react";

import SearchBar from "../components/SearchBar";
import { searchMovie } from "../services/api";

export default function Home() {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch(query: string) {
    try {
      setLoading(true);

      const data = await searchMovie(query);

      setMovie(data);
    } catch (error) {
      console.error(error);
      alert("Movie not found.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      <h1 className="text-5xl font-bold mb-4">
        🎬 CineVerse AI
      </h1>

      <p className="mb-8 text-gray-600">
        Explore Movies, TV Shows & Characters
      </p>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="mt-8">Loading...</p>
      )}

      {movie && (

        <div className="mt-10 bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl">

          {movie.poster && (

            <img
              src={movie.poster}
              alt={movie.title}
              className="w-60 rounded-lg mb-6"
            />

          )}

          <h2 className="text-3xl font-bold">
            {movie.title}
          </h2>

          <p className="mt-3">
            ⭐ {movie.rating}
          </p>

          <p className="mt-2">
            📅 {movie.release_date}
          </p>

          <p className="mt-6">
            {movie.overview}
          </p>

        </div>

      )}

    </main>
  );
}