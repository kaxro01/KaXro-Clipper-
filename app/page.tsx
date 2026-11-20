
"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState("Gaming Highlights");

  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div className="text-2xl font-black tracking-tight">
          KaXro<span className="text-violet-500">Clips</span>
        </div>
        <div className="flex gap-5 text-sm text-gray-400">
          <a href="#create">Create</a>
          <a href="#features">Features</a>
          <a href="https://github.com/kaxro01/KaXro-Clipper-">GitHub ↗</a>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <div className="mb-6 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
          ✦ OPEN SOURCE · FREE FOREVER
        </div>

        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          Your Gameplay.
          <br />
          <span className="text-violet-500">AI-Powered Clips.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          Turn long gaming videos into incredible short-form content.
          Discover highlights, create Shorts and share your best moments.
        </p>

        <div id="create" className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-[#12121c] p-5 text-left shadow-2xl">
          <h2 className="mb-2 text-xl font-bold">Create your clips</h2>
          <p className="mb-5 text-sm text-gray-400">
            Paste your video link to get started.
          </p>

          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube video URL..."
            className="w-full rounded-xl border border-white/10 bg-[#09090f] p-4 text-white outline-none focus:border-violet-500"
          />

          <p className="mb-2 mt-5 text-sm font-semibold">Clipping mode</p>

          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#09090f] p-4 text-white"
          >
            <option>Gaming Highlights</option>
            <option>Funny Moments</option>
            <option>Action & Explosions</option>
            <option>Best Moments</option>
          </select>

          <button
            onClick={() => alert(url ? "Video processing engine is coming soon!" : "Please enter a video URL first.")}
            className="mt-5 w-full rounded-xl bg-violet-600 p-4 font-bold transition hover:bg-violet-500"
          >
            ✦ Generate AI Clips
          </button>

          <p className="mt-4 text-center text-xs text-gray-500">
            No watermark · Open source · Free software
          </p>
        </div>
      </section>

      <section id="features" className="mx-auto grid max-w-5xl gap-5 px-5 pb-20 md:grid-cols-3">
        {[
          ["✦", "AI Highlights", "Discover exciting moments automatically."],
          ["▣", "Vertical Shorts", "Create 9:16 videos for TikTok and YouTube."],
          ["♧", "Smart Captions", "Generate subtitles for your clips."]
        ].map(([icon, title, description]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-[#12121c] p-6">
            <div className="mb-4 text-3xl text-violet-400">{icon}</div>
            <h3 className="mb-2 font-bold">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        ))}
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-gray-500">
        © 2026 KaXro Clips · Built for creators.
      </footer>
    </main>
  );
      }
