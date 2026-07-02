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
          className="relative h-[420px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${movie.backdrop})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>
      )}

      {/* Movie Information */}

      <section className="mx-auto -mt-48 max-w-7xl px-8 relative z-10">

        <div className="flex flex-col gap-10 lg:flex-row">

          {movie.poster && (
            <Image
              src={movie.poster}
              alt={movie.title}
              width={340}
              height={500}
              loading="eager"
              className="rounded-2xl shadow-2xl"
            />
          )}

          <div className="flex-1">

            <h1 className="text-5xl font-black">
              {movie.title}
            </h1>

            <p className="mt-4 text-xl text-yellow-400">
              ⭐ {movie.rating.toFixed(1)}
            </p>

            <p className="mt-2 text-slate-400">
              📅 {movie.release_date}
            </p>

            <p className="mt-8 max-w-4xl leading-8 text-slate-300">
              {movie.overview}
            </p>

            <div className="mt-10 flex flex-wrap gap-6">

              <div className="rounded-xl bg-slate-900 px-5 py-3">
                <span className="font-semibold">
                  Runtime:
                </span>{" "}
                {movie.runtime} min
              </div>

              <div className="rounded-xl bg-slate-900 px-5 py-3">
                <span className="font-semibold">
                  Genres:
                </span>{" "}
                {movie.genres.join(", ")}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Characters */}

      <section className="mx-auto mt-24 max-w-7xl px-8">

        <h2 className="mb-10 text-4xl font-black">
          🎭 Characters
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          {cast.map((character: any) => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          ))}

        </div>

      </section>

    </main>
  );
}