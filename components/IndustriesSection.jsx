import IndustryItem from "./IndustryItem";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { INDUSTRIES } from "@/data/industries";

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-gradient-to-b from-light to-white px-[5%] py-10">
      <Reveal className="mx-auto max-w-[1300px]">
        <SectionHeading align="center" line="none" eyebrow="Sectors We Protect" title="Specialized Security Across Critical Sectors" />
        <div className="mx-auto mt-2 flex h-[3px] w-14 justify-center"><span className="w-1/2 bg-navy" /><span className="w-1/2 bg-brand" /></div>
        <div className="mt-6 grid grid-cols-2 gap-x-4 sm:grid-cols-4 lg:grid-cols-7 lg:gap-0">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="lg:border-l lg:border-navy/15 lg:first:border-l-0"><IndustryItem {...i} /></div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
