import Image from "next/image";

import {
  getMovieDetails,
  getMovieCast,
} from "@/services/api";

import CharacterCard from "@/components/character/CharacterCard";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = await getMovieDetails(Number(id));
  const cast = await getMovieCast(Number(id));

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Backdrop */}

      {movie.backdrop && (
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${movie.backdrop})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>
      )}

      {/* Movie Info */}

      <section className="relative z-10 mx-auto -mt-52 max-w-7xl px-8">

        <div className="flex flex-col gap-12 lg:flex-row">

          <Image
            src={movie.poster}
            alt={movie.title}
            width={350}
            height={520}
            priority
            className="rounded-2xl shadow-2xl"
          />

          <div className="flex-1">

            <h1 className="text-6xl font-black">
              {movie.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4">

              <span className="rounded-xl bg-red-600 px-4 py-2">
                ⭐ {movie.rating.toFixed(1)}
              </span>

              <span className="rounded-xl bg-slate-800 px-4 py-2">
                📅 {movie.release_date}
              </span>

              <span className="rounded-xl bg-slate-800 px-4 py-2">
                ⏱ {movie.runtime} min
              </span>

            </div>

            <div className="mt-6 flex flex-wrap gap-3">

              {movie.genres.map((genre: string) => (
                <span
                  key={genre}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm"
                >
                  {genre}
                </span>
              ))}

            </div>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
              {movie.overview}
            </p>

          </div>

        </div>

      </section>

      {/* Characters */}

      <section className="mx-auto mt-28 max-w-7xl px-8 pb-20">

        <div className="mb-10">

          <h2 className="text-4xl font-black">
            🎭 Main Characters
          </h2>

          <p className="mt-2 text-slate-400">
            Click on any character to unlock AI analysis.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          {cast.map((character: any) => (
            <CharacterCard
              key={character.id}
              movieId={Number(id)}
              character={character}
            />
          ))}

        </div>

      </section>

    </main>
  );
}