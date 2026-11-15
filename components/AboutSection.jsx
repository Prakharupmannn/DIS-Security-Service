import { ArrowRight, ShieldCheck, Building2, MapPin } from "lucide-react";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const STATS = [
  { icon: ShieldCheck, value: "ManTech", label: "Integrated Security Model" },
  { icon: Building2, value: "100%", label: "PSARA & Statutory Compliance" },
  { icon: MapPin, value: "Pan-India", label: "Command & Control Network" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-lblue to-light">
      <div className="grid lg:grid-cols-[38%_1fr_26%] xl:grid-cols-[40%_1fr_27%] items-stretch">
        <div className="relative h-[250px] bg-navy sm:h-[320px] lg:h-auto lg:min-h-[290px] lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
          <Photo src="/images/image6.jpg" alt="Security operator monitoring CCTV screens in a control room" pos="40% 50%" sizes="(min-width:1024px) 40vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          <div className="absolute bottom-0 left-0 h-16 w-28 bg-brand [clip-path:polygon(0_0,100%_100%,0_100%)] sm:h-24 sm:w-40" />
          <div className="absolute right-[10%] top-0 hidden h-full w-1.5 origin-top skew-x-[-12deg] bg-brand lg:block" />
        </div>

        <Reveal className="flex flex-col justify-center px-[5%] py-8 sm:py-10 lg:px-6 lg:py-10 xl:px-10">
          <SectionHeading eyebrow="About DIS Security Services" title={<>A Market Leader in<br className="hidden sm:inline" /> Essential Security Solutions</>} />
          <p className="mt-4 max-w-lg text-[13px] sm:text-sm leading-relaxed text-body">Built on the foundational pillars of People, Process, and Technology, DIS Security Services is committed to building a safer and more secure society. We pioneer the ManTech security framework—blending academy-trained guarding personnel with advanced electronic surveillance to deliver unmatched operational vigilance and business continuity.</p>
          <a href="#services" className="mt-6 inline-flex h-10 w-fit items-center gap-2 rounded-full bg-brand px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand2 active:scale-95">Discover the DIS Advantage <ArrowRight size={14} /></a>
        </Reveal>

        <Reveal delay={150} className="mx-[5%] mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 border-t border-navy/15 pt-6 lg:m-0 lg:flex lg:flex-col lg:justify-center lg:gap-6 lg:border-l lg:border-t-0 lg:py-8 lg:pl-8 lg:pr-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-center gap-3.5 rounded-lg border border-navy/10 bg-white/70 p-3 sm:border-0 sm:bg-transparent sm:p-0">
              <Icon className="h-9 w-9 shrink-0 text-navy lg:h-10 lg:w-10 xl:h-11 xl:w-11" strokeWidth={1.5} />
              <div>
                <p className="text-xl font-bold leading-none text-navy">{value}</p>
                <p className="mt-1 text-[11px] sm:text-xs text-muted">{label}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
