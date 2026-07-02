"use client";

import Link from "next/link";
import Image from "next/image";

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
    <Link href={`/movie/${movie.id}`}>

      <Card className="group overflow-hidden border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">

        <div className="overflow-hidden">

          <Image
            src={movie.poster}
            alt={movie.title}
            width={500}
            height={750}
            className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110"
          />

        </div>

        <CardContent className="space-y-3 p-4">

          <h3 className="line-clamp-1 text-lg font-bold text-white">
            {movie.title}
          </h3>

          <Badge variant="secondary">
            ⭐ {movie.rating.toFixed(1)}
          </Badge>

        </CardContent>

      </Card>

    </Link>
  );
}