"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FAQS } from "@/data/content";

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-white px-[5%] py-12 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow="FAQs" title={<>Questions We Hear <br className="hidden lg:block" />Most Often</>} />
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-body">Can&apos;t find your answer? Our team is happy to walk you through options for your site.</p>
          <a href="#quote" className="mt-5 inline-flex h-10 items-center rounded-full bg-brand px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand2">Talk to Our Team</a>
        </div>
        <div className="divide-y divide-navy/10 rounded-lg border border-navy/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14px] font-semibold text-navy hover:bg-light">
                    {f.q}
                    <Plus size={18} className={`shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                </h3>
                <div id={`faq-${i}`} className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden px-5 text-[13px] leading-relaxed text-body"><span className="block pb-4">{f.a}</span></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
