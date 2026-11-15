import { ArrowRight, ShieldCheck, Cctv, Users, Car, Building2 } from "lucide-react";
import Photo from "./Photo";

const ICONS = { ShieldCheck, Cctv, Users, Car, Building2 };

export default function ServiceCard({ title, desc, icon, image, pos }) {
  const Icon = ICONS[icon];
  return (
    <a
      href="#quote"
      className="group relative block h-[270px] sm:h-[280px] lg:h-[270px] xl:h-[290px] w-[210px] sm:w-[230px] shrink-0 snap-start overflow-hidden rounded-xl bg-navy shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl lg:w-auto lg:min-w-0"
    >
      <Photo src={image} alt={title} pos={pos} sizes="(min-width:1024px) 14vw, 240px" className="transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-navy/85 to-navy/10" />
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-white flex flex-col justify-end">
        <Icon size={24} strokeWidth={1.6} className="text-white group-hover:text-brand transition-colors" />
        <h3 className="mt-2 text-sm sm:text-[15px] font-semibold leading-tight line-clamp-2">{title}</h3>
        <p className="mt-1 text-[11px] sm:text-xs leading-snug text-white/80 line-clamp-3">{desc}</p>
        <span className="mt-2.5 grid h-6 w-6 place-items-center rounded-full border border-white/70 transition group-hover:bg-brand group-hover:border-brand">
          <ArrowRight size={12} />
        </span>
      </div>
    </a>
  );
}
