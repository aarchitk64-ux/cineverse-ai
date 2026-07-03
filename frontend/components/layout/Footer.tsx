"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="mt-32 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-black"
    >
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="text-red-500" size={26} />

              <h2 className="text-3xl font-black text-white">
                <span className="text-red-500">
                  Cine
                </span>
                Verse AI
              </h2>
            </div>

            <p className="leading-7 text-slate-400">
              AI-powered movie intelligence platform
              where users can explore films,
              understand characters and chat with
              them naturally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-slate-400 transition hover:text-red-400"
              >
                Home
              </Link>

              <Link
                href="/"
                className="text-slate-400 transition hover:text-red-400"
              >
                Trending Movies
              </Link>

              <Link
                href="/"
                className="text-slate-400 transition hover:text-red-400"
              >
                AI Character Chat
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Connect
            </h3>

            <div className="flex gap-4">
              <button className="rounded-xl border border-slate-700 p-3 transition hover:border-red-500 hover:bg-red-600">
                <Github size={20} />
              </button>

              <button className="rounded-xl border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-blue-600">
                <Linkedin size={20} />
              </button>

              <button className="rounded-xl border border-slate-700 p-3 transition hover:border-green-500 hover:bg-green-600">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © 2026 CineVerse AI. All rights
              reserved.
            </p>

            <p>
              Built using Next.js • FastAPI •
              Groq AI • TMDB API
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}