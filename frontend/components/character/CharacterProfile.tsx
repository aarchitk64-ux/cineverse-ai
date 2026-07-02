import Image from "next/image";
import { Film, User } from "lucide-react";

interface CharacterProfileProps {
  character: {
    actor_name: string;
    character_name: string;
    movie_title: string;
    profile: string | null;
  };
}

export default function CharacterProfile({
  character,
}: CharacterProfileProps) {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-3">
      <div className="flex justify-center">
        {character.profile ? (
          <Image
            src={character.profile}
            alt={character.character_name}
            width={420}
            height={630}
            priority
            className="rounded-3xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition duration-300 hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-[620px] w-[420px] items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 text-slate-400">
            No Image Available
          </div>
        )}
      </div>

      <div className="space-y-8 lg:col-span-2">
        <div>
          <span className="rounded-full bg-red-600/20 px-4 py-2 text-sm font-semibold text-red-400">
            AI Character Profile
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
            {character.character_name}
          </h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="rounded-xl bg-blue-600 p-3">
              <User size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Played By
              </p>

              <h3 className="font-semibold">
                {character.actor_name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="rounded-xl bg-red-600 p-3">
              <Film size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Movie
              </p>

              <h3 className="font-semibold">
                {character.movie_title}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
          <h2 className="mb-3 text-xl font-bold">
            Talk with {character.character_name}
          </h2>

          <p className="leading-7 text-slate-300">
            Discover the motivations, relationships, personality,
            strengths, weaknesses and hidden details of this
            character using CineVerse AI. You can also chat naturally
            and ask questions as if you're speaking directly with the
            character.
          </p>
        </div>
      </div>
    </section>
  );
}