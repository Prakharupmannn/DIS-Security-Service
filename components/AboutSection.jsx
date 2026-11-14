import { ArrowRight, ShieldCheck, Building2, MapPin } from "lucide-react";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { IMAGES } from "@/data/images";

const STATS = [
  { icon: ShieldCheck, value: "5000+", label: "Trained Security Personnel" },
  { icon: Building2, value: "1000+", label: "Corporate Clients" },
  { icon: MapPin, value: "Pan India", label: "Presence" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-lblue to-light">
      <div className="grid lg:grid-cols-[43%_1fr_30%]">
        <div className="relative h-[260px] bg-navy sm:h-[340px] lg:h-auto lg:min-h-[270px] lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
          <Photo src={IMAGES.controlRoom} alt="Security operator monitoring CCTV screens in a control room" pos="40% 50%" sizes="(min-width:1024px) 43vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          <div className="absolute bottom-0 left-0 h-16 w-28 bg-brand [clip-path:polygon(0_0,100%_100%,0_100%)] sm:h-24 sm:w-40" />
          <div className="absolute right-[10%] top-0 hidden h-full w-1.5 origin-top skew-x-[-12deg] bg-brand lg:block" />
        </div>

        <Reveal className="px-[5%] py-8 lg:px-6 lg:py-10 xl:px-10">
          <SectionHeading eyebrow="About DIS Security" title={<>Building a Safer<br /> and More Secure Society</>} />
          <p className="mt-4 max-w-md text-[13px] leading-relaxed text-body">With decades of experience, DIS Security is India&apos;s leading security agency, committed to delivering innovative and reliable security solutions.</p>
          <a href="#about" className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-brand px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand2">Know More About Us <ArrowRight size={14} /></a>
        </Reveal>

        <Reveal delay={150} className="mx-[5%] mb-8 grid grid-cols-2 gap-5 border-t border-navy/15 pt-6 sm:grid-cols-3 lg:m-0 lg:flex lg:flex-col lg:justify-center lg:gap-5 lg:border-l lg:border-t-0 lg:py-8 lg:pl-8">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-center gap-3">
              <Icon className="h-9 w-9 shrink-0 text-navy lg:h-11 lg:w-11" strokeWidth={1.5} />
              <div><p className="text-xl font-bold leading-none text-navy">{value}</p><p className="mt-1 text-[11px] text-muted">{label}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
