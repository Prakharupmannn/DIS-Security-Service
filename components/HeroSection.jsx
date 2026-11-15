"use client";
import { useState, useEffect  } from "react";
import { ArrowRight, ArrowDown, Play } from "lucide-react";
import Photo from "./Photo";
import VideoModal from "./VideoModal";
import { IMAGES } from "@/data/images";

const SLIDES = [
  {
    image: "/images/dimage1.png",
    desc: "Leader in Essential Security Services — delivering comprehensive physical and tech-enabled protection across India.",
    pos: "60% 20%",
  },
  {
    image: "/images/dimage2.png",
    desc: "Pioneering the ManTech Model: empowering academy-trained security personnel with AI surveillance and smart command systems.",
    pos: "55% 25%",
  },
  {
    image: "/images/image6.jpg",
    desc: "Securing critical enterprises, commercial hubs and communities with unwavering vigilance and 24x7 control room command.",
    pos: "65% 15%",
  },
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const [video, setVideo] = useState(false);

  useEffect(() => {
    if (video) return;
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [video]);

const s = SLIDES[slide];

  return (
    <section id="home" className="relative isolate min-h-[640px] sm:min-h-[680px] lg:min-h-[680px] xl:min-h-[720px] overflow-hidden bg-gradient-to-br from-deep via-navy to-navy2 flex flex-col justify-between">
      {/* building */}
      <div className="absolute inset-0 -z-30"><Photo src={IMAGES.heroBuilding} alt="Modern glass corporate building lit in blue" priority className="drift opacity-70" pos="30% 50%" /></div>
      {/* guard */}
      {/* Automatic Security Image Slider */}
<div className="absolute inset-y-0 right-0 -z-20 w-full sm:w-[75%] lg:w-[58%]">
  <Photo
    key={s.image}
    src={s.image}
    alt="DIS Security professional security guard"
    priority
    sizes="(min-width:1024px) 58vw, 100vw"
    pos={s.pos}
    className="animate-hero-fade"
  />
</div>
      {/* shield graphic */}
      <svg viewBox="0 0 200 230" className="absolute -z-10 hidden h-[75%] right-[8%] top-[10%] opacity-25 lg:block" aria-hidden="true">
        <path d="M100 8 18 38v70c0 55 35 92 82 112 47-20 82-57 82-112V38L100 8Z" fill="rgba(120,170,255,.15)" stroke="#9cc2ff" strokeWidth="3" />
      </svg>
      {/* overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-deep/90 to-deep/60 sm:to-transparent lg:via-deep/75 lg:[background-size:75%_100%] lg:bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-transparent to-deep/60 sm:from-deep/90 sm:to-deep/40" />
      <div className="absolute -z-10 hidden h-[130%] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-brand/70 to-transparent lg:right-[30%] lg:top-[-10%] lg:block" />

      <div className="relative z-10 flex h-full flex-col justify-center px-[5%] pb-28 pt-28 sm:pt-32 sm:pb-32 lg:pb-24 lg:pt-36">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 sm:text-xs">People • Process • Technology</p>
        <h1 className="mt-3 font-extrabold leading-[1.08] text-white" style={{ fontSize: "clamp(1.85rem, 5vw, 3.6rem)" }}>
          DIS Security<br />
          <span className="font-bold">Always By </span>
          <span className="relative inline-block text-brand">
            Your Side
            <svg viewBox="0 0 240 14" preserveAspectRatio="none" className="absolute -bottom-1.5 sm:-bottom-2 left-0 h-2.5 sm:h-3 w-full" aria-hidden="true"><path d="M2 10C60 2 150 2 238 8" fill="none" stroke="#E60023" strokeWidth="3" strokeLinecap="round" /></svg>
          </span>
        </h1>
        <p className="mt-4 sm:mt-6 max-w-[22rem] sm:max-w-md lg:max-w-lg text-[13px] sm:text-base leading-relaxed text-white/90">{s.desc}</p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
          <a href="#services" className="inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-6 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:brightness-110 active:scale-95">Explore Security Solutions <ArrowRight size={16} /></a>
          <button onClick={() => setVideo(true)} className="group inline-flex items-center justify-center sm:justify-start gap-3 py-2 sm:py-0 text-xs sm:text-sm text-white transition hover:text-white/80">
            <span className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-full border-2 border-white transition group-hover:bg-white group-hover:text-navy"><Play size={16} fill="currentColor" /></span>
            Watch Corporate Film
          </button>
        </div>
      </div>

      {/* vertical text */}
      <div className="absolute bottom-24 sm:bottom-28 right-[5%] z-10 hidden text-sm font-semibold uppercase leading-snug tracking-wide text-white lg:block xl:bottom-32">
        Securing<br />Your<br />World
        <span className="mt-3 block h-[2px] w-8 bg-brand" />
      </div>

      {/* indicators */}
      <div className="absolute bottom-5 sm:bottom-6 left-[5%] z-10 flex items-center gap-2 text-[10px] text-white/70" role="tablist" aria-label="Hero slides">
        {SLIDES.map((_, i) => (
          <span key={i} className="flex items-center gap-2">
            <button role="tab" aria-selected={slide === i} aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)} className={`px-1 py-1 sm:py-2 font-semibold transition ${slide === i ? "text-brand" : "hover:text-white"}`}>0{i + 1}</button>
            {i < 2 && <span className={`h-px w-6 sm:w-8 transition-colors ${slide === i ? "bg-brand" : "bg-white/40"}`} />}
          </span>
        ))}
      </div>

      <a href="#services" className="absolute bottom-5 sm:bottom-6 right-[5%] z-10 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white transition hover:text-white/80">
        <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border border-white/80 transition hover:bg-white/10"><ArrowDown size={15} /></span>
        <span className="hidden sm:inline">Scroll Down</span>
      </a>

      <VideoModal open={video} onClose={() => setVideo(false)} />
    </section>
  );
}
