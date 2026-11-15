"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FAQS } from "@/data/content";

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-white px-[5%] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow="Frequently Asked Questions" title={<>Essential Insights on <br className="hidden sm:inline lg:block" />Our Security Solutions</>} />
          <p className="mt-4 max-w-sm text-[13px] sm:text-sm leading-relaxed text-body">Have questions about our ManTech framework, deployment turnaround, or compliance standards? Our security advisors are ready to walk you through options tailored to your site.</p>
          <a href="#quote" className="mt-5 inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-full bg-brand px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand2 active:scale-95">Speak to a Security Advisor</a>
        </div>
        <div className="divide-y divide-navy/10 rounded-xl border border-navy/10 overflow-hidden">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`} className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-5 sm:py-4 text-left text-[13px] sm:text-[14px] font-semibold text-navy hover:bg-light transition-colors">
                    <span className="leading-snug">{f.q}</span>
                    <Plus size={18} className={`shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                </h3>
                <div id={`faq-${i}`} className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden px-4 sm:px-5 text-xs sm:text-[13px] leading-relaxed text-body"><p className="pb-4 pt-1">{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
