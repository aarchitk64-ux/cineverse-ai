import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <Link
          href="/"
          className="text-3xl font-extrabold text-red-500 hover:text-red-400 transition"
        >
          🎬 CineVerse AI
        </Link>

        <div className="flex gap-8 text-slate-300 font-medium">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/history" className="hover:text-white transition">
            History
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

        </div>

      </div>
    </nav>
  );
}