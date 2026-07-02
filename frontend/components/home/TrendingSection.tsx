"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import MovieCard from "@/components/movie/MovieCard";
import { getTrendingMovies } from "@/services/api";
import { Movie } from "@/types/movie";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

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
    <section className="mx-auto mt-28 max-w-7xl px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-12 flex items-center justify-between"
      >
        <div>
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            Trending
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            🔥 Trending This Week
          </h2>

          <p className="mt-4 max-w-xl text-lg text-slate-400">
            Discover the most popular movies everyone is talking about.
          </p>
        </div>
      </motion.div>

      {loading ? (
        <div className="flex h-72 items-center justify-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-5"
        >
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}