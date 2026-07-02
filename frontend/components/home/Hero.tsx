"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-slate-950 to-slate-950" />

      <motion.div
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400 backdrop-blur-sm"
        >
          🎬 AI Powered Entertainment Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-8 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl"
        >
          Discover Movies.
          <br />

          <span className="bg-gradient-to-r from-red-500 via-red-300 to-white bg-clip-text text-transparent">
            Understand Characters.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="mt-8 max-w-3xl text-lg leading-9 text-slate-400 md:text-xl"
        >
          Search any movie and explore AI-generated character insights,
          personalities, motivations, timelines, relationships and much more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-5 py-3 backdrop-blur-md">
            🎭 Character Analysis
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-5 py-3 backdrop-blur-md">
            🤖 AI Conversations
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-5 py-3 backdrop-blur-md">
            🎬 Movie Intelligence
          </div>
        </motion.div>
      </div>
    </section>
  );
}