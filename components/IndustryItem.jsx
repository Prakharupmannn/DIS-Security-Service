import { Building2, Factory, ShoppingCart, HeartPulse, GraduationCap, House, Landmark } from "lucide-react";
const ICONS = { Building2, Factory, ShoppingCart, HeartPulse, GraduationCap, House, Landmark };

export default function IndustryItem({ name, icon }) {
  const Icon = ICONS[icon];
  return (
    <a href="#quote" className="group flex flex-col items-center justify-center gap-2 py-2 sm:py-3 text-center text-navy transition hover:-translate-y-1 active:scale-95">
      <Icon size={30} strokeWidth={1.4} className="h-7 w-7 sm:h-8 sm:w-8 transition-colors group-hover:text-brand" />
      <span className="text-xs sm:text-[13px] font-semibold leading-tight">{name}</span>
    </a>
  );
}
