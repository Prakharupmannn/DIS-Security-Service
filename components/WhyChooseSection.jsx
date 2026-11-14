import { BadgeCheck, Clock, Cpu, FileCheck, Headset, Gauge } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { WHY } from "@/data/content";

const ICONS = { BadgeCheck, Clock, Cpu, FileCheck, Headset, Gauge };

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="bg-white px-[5%] py-12 lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <SectionHeading align="center" line="none" eyebrow="Why Choose DIS Security" title="Security You Can Rely On, Every Day" />
          <div className="mx-auto mt-2 flex h-[3px] w-14"><span className="w-1/2 bg-navy" /><span className="w-1/2 bg-brand" /></div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted">Protection is more than presence. It is discipline, training, technology and accountability working together.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon, title, text }, i) => {
            const Icon = ICONS[icon];
            return (
              <Reveal key={title} delay={i * 70}>
                <div className="group h-full rounded-lg border border-navy/10 bg-light p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-navy text-white transition group-hover:bg-brand"><Icon size={24} strokeWidth={1.6} /></span>
                  <h3 className="mt-4 text-[16px] font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-body">{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
