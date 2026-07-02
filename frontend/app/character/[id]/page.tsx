import Image from "next/image";

import { getMovieCast } from "@/services/api";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Temporary: Using Interstellar cast until we build the Character API
  const cast = await getMovieCast(157336);

  const character = cast.find(
    (c: any) => c.id === Number(id)
  );

  if (!character) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h1 className="text-3xl font-bold">Character Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Character Image */}

          <div>

            {character.profile ? (
              <Image
                src={character.profile}
                alt={character.character}
                width={400}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            ) : (
              <div className="flex h-[600px] items-center justify-center rounded-2xl bg-slate-900">
                No Image
              </div>
            )}

          </div>

          {/* Character Information */}

          <div className="lg:col-span-2">

            <h1 className="text-6xl font-black">
              {character.character}
            </h1>

            <p className="mt-4 text-2xl text-red-400">
              Played by {character.name}
            </p>

            <div className="mt-12 space-y-8">

              <div className="rounded-2xl bg-slate-900 p-6">

                <h2 className="text-2xl font-bold">
                  📖 Background
                </h2>

                <p className="mt-4 leading-8 text-slate-400">
                  AI-generated background will appear here.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-900 p-6">

                <h2 className="text-2xl font-bold">
                  🧠 Personality
                </h2>

                <p className="mt-4 leading-8 text-slate-400">
                  AI personality analysis will appear here.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-900 p-6">

                <h2 className="text-2xl font-bold">
                  ❤️ Relationships
                </h2>

                <p className="mt-4 leading-8 text-slate-400">
                  Character relationships will appear here.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-900 p-6">

                <h2 className="text-2xl font-bold">
                  📅 Character Timeline
                </h2>

                <p className="mt-4 leading-8 text-slate-400">
                  Timeline of important events will appear here.
                </p>

              </div>

              <div className="rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-950/40 to-slate-900 p-6">

                <h2 className="text-2xl font-bold text-red-400">
                  🤖 AI Chat
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Coming soon...
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}