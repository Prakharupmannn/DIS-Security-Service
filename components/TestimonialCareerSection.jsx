import { ArrowRight, Quote } from "lucide-react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { IMAGES } from "@/data/images";

export default function TestimonialCareerSection() {
  return (
    <section id="careers" className="relative overflow-hidden bg-gradient-to-r from-deep via-navy to-navy2 text-white">
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_20%_50%,rgba(40,90,200,.25),transparent_60%)] lg:block" />
      <div className="relative grid lg:grid-cols-2">
        <Reveal className="px-[5%] py-10 lg:py-12 lg:pr-10">
          <Quote size={40} className="rotate-180 fill-brand text-brand" aria-hidden="true" />
          <blockquote className="mt-3 max-w-lg text-base leading-relaxed sm:text-lg">DIS Security has been our trusted security partner for years. Their professionalism and commitment are truly commendable.</blockquote>
          <figure className="mt-5 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/80 bg-navy2"><Photo src={IMAGES.customer} alt="Rohit Sharma" sizes="48px" pos="50% 30%" /></div>
            <figcaption><p className="text-sm font-semibold">Rohit Sharma</p><p className="text-[11px] text-white/70">CEO, Leading Business Group</p></figcaption>
          </figure>
        </Reveal>

        <div className="relative min-h-[260px] lg:min-h-[240px]">
          <div className="absolute inset-0 bg-navy2"><Photo src={IMAGES.careers} alt="Security professionals walking through a modern glass office" pos="70% 50%" sizes="(min-width:1024px) 50vw, 100vw" /></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10" />
          <div className="absolute inset-y-0 left-0 hidden w-px origin-center rotate-[12deg] scale-y-150 bg-brand lg:block" />
          <div className="relative flex h-full flex-col justify-center px-[5%] py-10 lg:pl-14 lg:pr-0">
            <h2 id="join" className="text-2xl font-bold">Join Our Team</h2>
            <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-white/90">Be a part of a team that values people, growth and purpose.</p>
            <a href="#careers" className="mt-4 inline-flex h-10 w-fit items-center gap-2 rounded-full bg-brand px-5 text-xs font-semibold transition hover:-translate-y-0.5 hover:bg-brand2">Explore Careers <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
