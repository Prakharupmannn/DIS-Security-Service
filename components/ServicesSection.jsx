"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    const firstCard = el.querySelector("[data-service-card]");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 14; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), SERVICES.length - 1));
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    updateScrollState();
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cards = el.querySelectorAll("[data-service-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(activeIndex - 1, 0));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(activeIndex + 1, SERVICES.length - 1));
  };

  return (
    <section id="services" className="relative bg-gradient-to-b from-white via-lblue/30 to-lblue px-[5%] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[minmax(240px,24%)_1fr] lg:gap-6 xl:gap-8">
        <Reveal>
          <SectionHeading eyebrow="Security Solutions" title={<>Integrated ManTech<br className="hidden sm:inline lg:block" /> Protection Services</>} />
          <p className="mt-4 max-w-sm text-[13px] sm:text-sm leading-relaxed text-body">
            From verified manned guarding to advanced AI-powered e-surveillance, DIS Security Services delivers tailored essential security solutions protecting assets, people, and business continuity.
          </p>
          <a
            href="#quote"
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-brand px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand2 active:scale-95 shadow-md shadow-brand/20"
          >
            View All Solutions <ArrowRight size={14} />
          </a>
        </Reveal>

        <div className="w-full min-w-0">
          {/* Scrollable / Grid Cards */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-3.5 sm:gap-4 overflow-x-auto scroll-smooth pb-3 pt-1 touch-pan-y -mx-[5%] px-[5%] lg:m-0 lg:p-0 lg:grid lg:grid-cols-5 lg:gap-3 xl:gap-4 lg:overflow-visible"
          >
            {SERVICES.map((s, idx) => (
              <ServiceCard key={s.title} {...s} index={idx} />
            ))}
          </div>

          {/* Mobile & Tablet Slider Controls */}
          <div className="mt-4 flex items-center justify-between px-1 lg:hidden">
            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Services carousel">
              {SERVICES.map((s, idx) => (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={activeIndex === idx}
                  aria-label={`Service ${idx + 1}: ${s.title}`}
                  onClick={() => scrollToIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-brand" : "w-2 bg-navy/20 hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollLeft}
                aria-label="Previous service card"
                className="grid h-9 w-9 place-items-center rounded-full border border-navy/20 bg-white text-navy shadow-sm transition hover:border-brand hover:bg-brand hover:text-white disabled:opacity-30 disabled:pointer-events-none active:scale-90"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollRight}
                aria-label="Next service card"
                className="grid h-9 w-9 place-items-center rounded-full border border-navy/20 bg-white text-navy shadow-sm transition hover:border-brand hover:bg-brand hover:text-white disabled:opacity-30 disabled:pointer-events-none active:scale-90"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
