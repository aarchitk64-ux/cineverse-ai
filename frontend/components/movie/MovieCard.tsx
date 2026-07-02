"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({
  movie,
}: MovieCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Link href={`/movie/${movie.id}`}>
        <Card className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-red-500 hover:shadow-[0_20px_50px_rgba(239,68,68,0.25)]">
          <div className="relative overflow-hidden">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={500}
              height={750}
              className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            <Badge className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-white">
              <Star size={14} fill="white" />
              {movie.rating.toFixed(1)}
            </Badge>

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            >
              <span className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-lg font-semibold text-white">
                View Details →
              </span>
            </motion.div>
          </div>

          <CardContent className="space-y-4 p-5">
            <h3 className="line-clamp-2 text-xl font-bold text-white transition group-hover:text-red-400">
              {movie.title}
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                AI Character Analysis
              </span>

              <span className="text-red-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}