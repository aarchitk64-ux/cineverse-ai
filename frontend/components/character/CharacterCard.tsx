"use client";

import Image from "next/image";
import Link from "next/link";

import { Character } from "@/types/movie";

interface CharacterCardProps {
  movieId: number;
  character: Character;
}

export default function CharacterCard({
  movieId,
  character,
}: CharacterCardProps) {
  return (
    <Link href={`/character/${movieId}/${character.id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-red-500">

        {character.profile ? (
          <Image
            src={character.profile}
            alt={character.character}
            width={300}
            height={450}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-72 items-center justify-center bg-slate-800">
            No Image
          </div>
        )}

        <div className="space-y-2 p-4">

          <h3 className="text-lg font-bold text-white">
            {character.character}
          </h3>

          <p className="text-sm text-slate-400">
            Played by
          </p>

          <p className="font-medium text-red-400">
            {character.name}
          </p>

        </div>

      </div>
    </Link>
  );
}