"use client";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/content";

function Counter({ value, suffix, run }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setN(value);
    let raf, start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);
  return <>{n.toLocaleString("en-IN")}{suffix}</>;
}

export default function StatsBand() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setRun(true), io.disconnect()), { threshold: 0.3 });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} aria-label="DIS Security Services in numbers" className="relative overflow-hidden bg-gradient-to-r from-deep via-navy to-navy2 px-[5%] py-10 sm:py-12 lg:py-14 text-white">
      <div className="absolute inset-y-0 right-[18%] hidden w-1.5 skew-x-[-18deg] bg-brand/80 lg:block" aria-hidden="true" />
      <dl className="relative mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="border-white/15 px-2 sm:px-4 text-center lg:border-l lg:first:border-l-0">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight whitespace-nowrap">
              <Counter value={s.value} suffix={s.suffix} run={run} />
            </dd>
            <p className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-white/75 leading-tight" aria-hidden="true">
              {s.label}
            </p>
          </div>
        ))}
      </dl>
    </section>
  );
}
