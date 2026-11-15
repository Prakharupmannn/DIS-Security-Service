import { BadgeCheck, Clock, Cpu, FileCheck, Headset, Gauge } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { WHY } from "@/data/content";

const ICONS = { BadgeCheck, Clock, Cpu, FileCheck, Headset, Gauge };

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="bg-white px-[5%] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <SectionHeading align="center" line="none" eyebrow="Why Choose DIS Security Services" title="The ManTech Advantage: People, Process & Technology" />
          <div className="mx-auto mt-2.5 flex h-[3px] w-14"><span className="w-1/2 bg-navy" /><span className="w-1/2 bg-brand" /></div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs sm:text-sm leading-relaxed text-muted">True security excellence demands more than physical presence. DIS Security Services integrates rigorous academy training, strict standard operating procedures, and intelligent tech-driven command systems.</p>
        </Reveal>
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon, title, text }, i) => {
            const Icon = ICONS[icon];
            return (
              <Reveal key={title} delay={i * 70}>
                <div className="group h-full rounded-xl border border-navy/10 bg-light p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                  <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-lg bg-navy text-white transition group-hover:bg-brand"><Icon size={22} className="sm:h-6 sm:w-6" strokeWidth={1.6} /></span>
                  <h3 className="mt-4 text-[15px] sm:text-[16px] font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-body">{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
