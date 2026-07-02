import { getCharacterAnalysis } from "@/services/api";

import ChatBox from "@/components/chat/ChatBox";

export default async function ChatPage({
  params,
}: {
  params: Promise<{
    movieId: string;
    personId: string;
  }>;
}) {
  const { movieId, personId } = await params;

  const data = await getCharacterAnalysis(
    Number(movieId),
    Number(personId)
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            AI Character Chat
          </h1>

          <p className="mt-2 text-slate-400">
            Chat naturally with your favorite character powered by AI.
          </p>
        </div>

        <ChatBox
          movieId={Number(movieId)}
          personId={Number(personId)}
          characterName={data.character.character_name}
        />
      </section>
    </main>
  );
}