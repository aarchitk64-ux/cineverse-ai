"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <Sparkles
            size={28}
            className="text-red-500 transition duration-300 group-hover:rotate-12"
          />

          <span className="text-3xl font-black tracking-tight">
            <span className="text-red-500">Cine</span>
            <span className="text-white">Verse AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/"
            className="text-slate-300 transition hover:text-white"
          >
            Movies
          </Link>

          <Link
            href="/"
            className="text-slate-300 transition hover:text-white"
          >
            Characters
          </Link>
        </nav>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-red-600/20 transition"
        >
          AI Chat
        </motion.button>
      </div>
    </motion.header>
  );
}