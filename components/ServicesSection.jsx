import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-white via-lblue/30 to-lblue px-[5%] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[minmax(240px,24%)_1fr] lg:gap-6 xl:gap-8">
        <Reveal>
          <SectionHeading eyebrow="Security Solutions" title={<>Integrated ManTech<br className="hidden sm:block lg:block" /> Protection Services</>} />
          <p className="mt-4 max-w-sm text-[13px] sm:text-sm leading-relaxed text-body">From verified manned guarding to advanced AI-powered e-surveillance, DIS Security Services delivers tailored essential security solutions protecting assets, people, and business continuity.</p>
          <a href="#quote" className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-brand px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand2 active:scale-95">View All Solutions <ArrowRight size={14} /></a>
        </Reveal>
        <Reveal delay={150} className="-mx-[5%] px-[5%] lg:m-0 lg:p-0">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-1 lg:grid lg:grid-cols-5 lg:gap-3 xl:gap-4 lg:overflow-visible lg:pb-0">
            {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
