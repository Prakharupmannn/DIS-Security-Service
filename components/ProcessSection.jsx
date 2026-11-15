import { ClipboardList, PencilRuler, UserCheck, Radar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PROCESS } from "@/data/content";

const ICONS = { ClipboardList, PencilRuler, UserCheck, Radar };

export default function ProcessSection() {
  return (
    <section id="process" className="bg-gradient-to-b from-lblue to-light px-[5%] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <SectionHeading align="center" line="none" eyebrow="Our Operational Framework" title="A Structured, Proven ManTech Deployment Process" />
          <div className="mx-auto mt-2.5 flex h-[3px] w-14"><span className="w-1/2 bg-navy" /><span className="w-1/2 bg-brand" /></div>
        </Reveal>
        <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-navy/20 lg:block" aria-hidden="true" />
          {PROCESS.map(({ icon, title, text }, i) => {
            const Icon = ICONS[icon];
            return (
              <Reveal as="li" key={title} delay={i * 100} className="relative text-center">
                <span className="relative mx-auto grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full border-2 border-navy bg-white text-navy shadow-md">
                  <Icon size={24} className="sm:h-[26px] sm:w-[26px]" strokeWidth={1.6} />
                  <span className="absolute -right-1 -top-1 grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full bg-brand text-[10px] sm:text-[11px] font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-4 text-[15px] sm:text-[16px] font-semibold text-navy">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs sm:max-w-[17rem] text-xs sm:text-[13px] leading-relaxed text-body">{text}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
