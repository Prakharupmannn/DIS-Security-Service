import IndustryItem from "./IndustryItem";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { INDUSTRIES } from "@/data/industries";

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-gradient-to-b from-light to-white px-[5%] py-12 sm:py-14">
      <Reveal className="mx-auto max-w-[1300px]">
        <SectionHeading align="center" line="none" eyebrow="Sectors We Protect" title="Specialized Security Across Critical Sectors" />
        <div className="mx-auto mt-2.5 flex h-[3px] w-14 justify-center"><span className="w-1/2 bg-navy" /><span className="w-1/2 bg-brand" /></div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-0">
          {INDUSTRIES.map((i, idx) => (
            <div
              key={i.name}
              className={`rounded-xl border border-navy/10 bg-white/80 p-3 sm:p-4 shadow-sm transition hover:border-brand/40 hover:bg-white hover:shadow-md lg:rounded-none lg:border-0 lg:border-l lg:border-navy/15 lg:first:border-l-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
                idx === INDUSTRIES.length - 1 ? "col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <IndustryItem {...i} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
