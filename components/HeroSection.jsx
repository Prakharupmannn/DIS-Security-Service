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
    <section id="home" className="relative isolate min-h-[620px] overflow-hidden bg-gradient-to-br from-deep via-navy to-navy2 lg:min-h-[500px] lg:h-[clamp(440px,48vw,640px)]">
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-deep/85 to-transparent lg:via-deep/70 lg:to-transparent lg:[background-size:75%_100%] lg:bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep/90 via-transparent to-deep/50" />
      <div className="absolute -z-10 hidden h-[130%] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-brand/70 to-transparent lg:right-[30%] lg:top-[-10%] lg:block" />

      <div className="relative z-10 flex h-full flex-col justify-center px-[5%] pb-28 pt-32 lg:pb-16 lg:pt-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white sm:text-xs">People • Process • Technology</p>
        <h1 className="mt-3 font-extrabold leading-[1.05] text-white" style={{ fontSize: "clamp(2.1rem, 5.4vw, 3.6rem)" }}>
          DIS Security<br />
          <span className="font-bold">Always By </span>
          <span className="relative inline-block text-brand">
            Your Side
            <svg viewBox="0 0 240 14" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full" aria-hidden="true"><path d="M2 10C60 2 150 2 238 8" fill="none" stroke="#E60023" strokeWidth="3" strokeLinecap="round" /></svg>
          </span>
        </h1>
        <p className="mt-6 max-w-[22rem] text-[15px] leading-relaxed text-white/90 sm:text-base lg:max-w-sm">{s.desc}</p>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <a href="#services" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-6 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:brightness-110">Explore Security Solutions <ArrowRight size={16} /></a>
          <button onClick={() => setVideo(true)} className="group inline-flex items-center gap-3 text-sm text-white">
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-white transition group-hover:bg-white group-hover:text-navy"><Play size={16} fill="currentColor" /></span>
            Watch Corporate Film
          </button>
        </div>
      </div>

      {/* vertical text */}
      <div className="absolute bottom-28 right-[5%] z-10 hidden text-sm font-semibold uppercase leading-snug tracking-wide text-white lg:block xl:bottom-32">
        Securing<br />Your<br />World
        <span className="mt-3 block h-[2px] w-8 bg-brand" />
      </div>

      {/* indicators */}
      <div className="absolute bottom-6 left-[5%] z-10 flex items-center gap-2 text-[10px] text-white/70" role="tablist" aria-label="Hero slides">
        {SLIDES.map((_, i) => (
          <span key={i} className="flex items-center gap-2">
            <button role="tab" aria-selected={slide === i} aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)} className={`px-1 py-2 font-semibold ${slide === i ? "text-brand" : "hover:text-white"}`}>0{i + 1}</button>
            {i < 2 && <span className={`h-px w-8 ${slide === i ? "bg-brand" : "bg-white/40"}`} />}
          </span>
        ))}
      </div>

      <a href="#services" className="absolute bottom-6 right-[5%] z-10 flex items-center gap-3 text-sm text-white">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/80"><ArrowDown size={16} /></span>
        <span className="hidden sm:inline">Scroll Down</span>
      </a>

      <VideoModal open={video} onClose={() => setVideo(false)} />
    </section>
  );
}
