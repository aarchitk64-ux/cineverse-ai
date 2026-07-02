import {
  Brain,
  Target,
  Heart,
  Clock3,
  Shield,
  TriangleAlert,
} from "lucide-react";

interface CharacterAnalysisProps {
  analysis: {
    background: string;
    personality: string;
    motivations: string;
    relationships: string;
    timeline: string;
    strengths: string;
    weaknesses: string;
  };
}

export default function CharacterAnalysis({
  analysis,
}: CharacterAnalysisProps) {
  const cards = [
    {
      title: "Background",
      icon: Brain,
      color: "text-blue-400",
      content: analysis.background,
    },
    {
      title: "Personality",
      icon: Heart,
      color: "text-pink-400",
      content: analysis.personality,
    },
    {
      title: "Motivations",
      icon: Target,
      color: "text-green-400",
      content: analysis.motivations,
    },
    {
      title: "Relationships",
      icon: Heart,
      color: "text-red-400",
      content: analysis.relationships,
    },
    {
      title: "Timeline",
      icon: Clock3,
      color: "text-yellow-400",
      content: analysis.timeline,
    },
    {
      title: "Strengths",
      icon: Shield,
      color: "text-emerald-400",
      content: analysis.strengths,
    },
    {
      title: "Weaknesses",
      icon: TriangleAlert,
      color: "text-orange-400",
      content: analysis.weaknesses,
    },
  ];

  return (
    <section className="mt-20">
      <div className="mb-12">
        <h2 className="text-4xl font-black">
          AI Character Analysis
        </h2>

        <p className="mt-3 text-slate-400">
          Generated using Groq AI based on the character's role,
          story and movie context.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-red-500/40"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-slate-800 p-3">
                  <Icon
                    size={24}
                    className={card.color}
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  {card.title}
                </h3>
              </div>

              <p className="leading-8 whitespace-pre-line text-slate-300">
                {card.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}