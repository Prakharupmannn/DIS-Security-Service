import { ArrowRight, ShieldCheck, Cctv, Users, Car, Building2 } from "lucide-react";
import Photo from "./Photo";

const ICONS = { ShieldCheck, Cctv, Users, Car, Building2 };

export default function ServiceCard({ title, desc, icon, image, pos }) {
  const Icon = ICONS[icon];
  return (
    <a href="#contact" className="group relative block h-[240px] min-w-[150px] shrink-0 snap-start overflow-hidden rounded-lg bg-navy shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl lg:min-w-0">
      <Photo src={image} alt={title} pos={pos} sizes="(min-width:1024px) 14vw, 160px" className="transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/10" />
      <div className="absolute inset-x-0 bottom-0 p-3 text-white">
        <Icon size={24} strokeWidth={1.6} />
        <h3 className="mt-2 text-[15px] font-semibold leading-tight">{title}</h3>
        <p className="mt-1 text-[10px] leading-snug text-white/80">{desc}</p>
        <span className="mt-2 grid h-5 w-5 place-items-center rounded-full border border-white/70 transition group-hover:bg-brand group-hover:border-brand"><ArrowRight size={11} /></span>
      </div>
    </a>
  );
}
