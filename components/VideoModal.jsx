
"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Shield, X } from "lucide-react";

// Replace with your actual YouTube video embed URL
const VIDEO_SRC = "https://www.youtube.com/embed/V19Ezwlsvts?autoplay=1&mute=1&loop=1&playlist=V19Ezwlsvts&controls=0&showinfo=0&rel=0&modestbranding=1";

export default function VideoModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xl transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="DIS Security corporate video"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Brand Glow */}
        <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand/25 via-blue-500/15 to-brand/25 opacity-70 blur-2xl" />

        {/* Modal Container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#061428]/95 p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(230,0,35,0.2)] backdrop-blur-2xl sm:p-5">
          {/* Header */}
          <div className="mb-3.5 flex items-center justify-between gap-3 pr-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand2 text-white shadow-lg shadow-brand/30">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight text-white sm:text-base">
                  DIS Security Operations & Command Center
                </h3>
                <p className="mt-0.5 text-xs text-slate-400">
                  Official Corporate Film • Always By Your Side
                </p>
              </div>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              ARC LIVE FEED
            </div>

            <button
              onClick={onClose}
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand hover:scale-105 active:scale-95"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
          </div>

          {/* Video Player Frame */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl">
            <iframe
              className="h-full w-full"
              src={VIDEO_SRC}
              title="DIS Security Corporate Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
