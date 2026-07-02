"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";

import SearchBar from "@/components/search/SearchBar";
import TrendingSection from "@/components/home/TrendingSection";

import { searchMovie } from "@/services/api";

export default function Home() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSearch(query: string) {
  try {
    setLoading(true);

    const movie = await searchMovie(query);

    router.push(`/movie/${movie.id}`);
  } catch (error) {
    console.error(error);
    alert("Movie not found.");
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <section className="mx-auto -mt-8 max-w-3xl px-6">
        <SearchBar onSearch={handleSearch} />
      </section>

      {loading && (
        <div className="mt-8 text-center text-slate-400">
          Searching...
        </div>
      )}

      <TrendingSection />

      <Footer />
    </main>
  );
}