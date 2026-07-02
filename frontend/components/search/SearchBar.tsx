"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const value = query.trim();

    if (!value || loading) return;

    setLoading(true);

    try {
      await Promise.resolve(onSearch(value));
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.6,
        duration: 0.7,
      }}
      onSubmit={handleSubmit}
      className="mx-auto mt-12 flex w-full max-w-4xl flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl backdrop-blur-xl md:flex-row"
    >
      <div className="relative flex-1">
        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <Input
          placeholder="Search movies like Interstellar, Avengers, Batman..."
          value={query}
          disabled={loading}
          onChange={(e) => setQuery(e.target.value)}
          className="h-16 rounded-2xl border-slate-700 bg-slate-950 pl-14 pr-4 text-lg text-white placeholder:text-slate-500 focus:border-red-500"
        />
      </div>

      <Button
        type="submit"
        disabled={loading || !query.trim()}
        className="h-16 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-10 text-lg font-semibold transition hover:from-red-500 hover:to-red-400 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Searching...
          </>
        ) : (
          <>
            <Search className="mr-2 h-5 w-5" />
            Search
          </>
        )}
      </Button>
    </motion.form>
  );
}