import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-white to-lblue px-[5%] py-10 lg:py-8">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[minmax(240px,24%)_1fr] lg:gap-6">
        <Reveal>
          <SectionHeading eyebrow="Our Services" title={<>Comprehensive<br className="hidden lg:block" /> Security Solutions</>} />
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-body">From manned guarding to advanced technology, DIS Security offers tailored solutions to meet your unique needs.</p>
          <a href="#services" className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-brand px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand2">View All Services <ArrowRight size={14} /></a>
        </Reveal>
        <Reveal delay={150} className="-mx-[5%] px-[5%] lg:m-0 lg:p-0">
          <div className="no-scrollbar flex snap-x gap-3 overflow-x-auto pb-3 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
