import { ArrowRight, ShieldCheck, Cctv, Users, Car, Building2 } from "lucide-react";
import Photo from "./Photo";

const ICONS = { ShieldCheck, Cctv, Users, Car, Building2 };

export default function ServiceCard({ title, desc, icon, image, pos, index }) {
  const Icon = ICONS[icon];
  return (
    <a
      href="#quote"
      data-service-card
      data-index={index}
      className="group relative block h-[290px] sm:h-[310px] lg:h-[285px] xl:h-[310px] w-[80vw] max-w-[280px] xs:w-[260px] sm:w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl bg-navy shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl lg:w-auto lg:max-w-none lg:min-w-0 active:scale-98"
    >
      <Photo
        src={image}
        alt={title}
        pos={pos}
        sizes="(min-width:1024px) 14vw, 300px"
        className="transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-navy/90 to-navy/15" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-4.5 text-white flex flex-col justify-end">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-brand group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} className="text-white" />
        </span>
        <h3 className="mt-3 text-[15px] sm:text-base lg:text-[14px] xl:text-[15px] font-semibold leading-snug">
          {title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-[13px] lg:text-[11px] xl:text-xs leading-relaxed text-white/85">
          {desc}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/90 transition group-hover:text-brand">
          Explore Service
          <span className="grid h-5 w-5 place-items-center rounded-full border border-white/60 transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
            <ArrowRight size={11} />
          </span>
        </span>
      </div>
    </a>
  );
}
