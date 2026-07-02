"use client";

import { useEffect, useState } from "react";

import MovieCard from "../movie/MovieCard";

import { getTrendingMovies } from "@/services/api";
import { Movie } from "@/types/movie";

export default function TrendingSection() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <section className="mx-auto mt-20 max-w-7xl px-8">
      <h2 className="mb-8 text-4xl font-bold text-white">
        🔥 Trending Movies
      </h2>

      {loading ? (
        <p className="text-slate-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}
    </section>
  );
}