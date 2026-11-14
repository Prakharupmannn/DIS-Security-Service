
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Shield,
  Activity,
  Radio,
  Volume2,
  X,
} from "lucide-react";

// Replace with your actual YouTube video embed URL
const VIDEO_SRC = "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0";

export default function VideoModal({ open, onClose }) {

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/80 backdrop-blur-sm p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="DIS Security corporate video"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#071426] p-4 sm:p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand hover:rotate-90"
          aria-label="Close video"
        >
          <X size={21} />
        </button>

        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-3 pr-10">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
              <Shield className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-bold leading-tight text-white sm:text-base">
                DIS Security Operations & Command Center
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Official Corporate Film: Always By Your Side | The ManTech Advantage
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            VIDEO PLAYER
          </div>
        </div>

        {/* Video Section */}
        <div className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">

          {/* Video Thumbnail / Background */}
          <Image
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
            alt="DIS Security corporate video"
            fill
            sizes="(min-width:1024px) 56rem, 95vw"
            className="object-cover brightness-75 contrast-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

          {/* Camera Status */}
          <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-black/70 px-3 py-1.5 font-mono text-[10px] text-emerald-400 backdrop-blur-md sm:left-4 sm:top-4 sm:text-[11px]">
            <Radio className="h-3.5 w-3.5 animate-pulse text-brand" />
            CAM_01: NATIONAL ARC COMMAND [ONLINE]
          </div>

          {/* Play Button / YouTube Player */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">

            <iframe
              className="h-full w-full"
              src={VIDEO_SRC}
              title="DIS Security Corporate Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />

          </div>

          {/* Bottom Telemetry */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/70 px-3 py-2 text-[10px] text-slate-300 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:px-4 sm:text-xs">

            <span className="flex items-center gap-2">
              <Activity className="h-4 w-4 shrink-0 text-emerald-400" />
              Security Operations Active
            </span>

            <span className="hidden items-center gap-2 sm:flex">
              <Volume2 className="h-4 w-4" />
              HQ Audio Feed Active
            </span>
          </div>
        </div>

        {/* Information Cards */}
        <div className="mt-4 grid grid-cols-1 gap-3 text-xs text-slate-300 sm:grid-cols-3">

          {[
            [
              "1. Academy Training & Verification",
              "Rigorous residential academy curriculum, police clearance, and continuous digital skill enhancement.",
            ],
            [
              "2. ManTech & E-Surveillance",
              "AI-driven CCTV surveillance, smart access integration, and 24x7 Alarm Response Centre (ARC) tracking.",
            ],
            [
              "3. Operational Governance",
              "100% PSARA statutory compliance, dedicated account management, and round-the-clock supervisor patrol audits.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-brand/40 hover:bg-white/10"
            >
              <strong className="mb-1 block font-bold text-white">
                {title}
              </strong>

              <span>{description}</span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
