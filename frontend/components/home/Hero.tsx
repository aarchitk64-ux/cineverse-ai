export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-slate-950 to-slate-950" />

      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-red-600/20 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">

        <span className="mb-6 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-300">
          🚀 AI-Powered Movie Intelligence Platform
        </span>

        <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight text-white md:text-8xl">
          
          <br />
          <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Cinema-quality picks, curated for your taste.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
          Search millions of movies, TV shows and actors.
          Get AI-powered summaries, discover hidden details,
          explore cast information and unlock intelligent insights.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

          <div className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3">
            🎬 1M+ Movies
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3">
            📺 TV Shows
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3">
            🤖 AI Insights
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3">
            ⭐ Trending Daily
          </div>

        </div>

      </div>

    </section>
  );
}