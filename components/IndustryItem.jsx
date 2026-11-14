import { Building2, Factory, ShoppingCart, HeartPulse, GraduationCap, House, Landmark } from "lucide-react";
const ICONS = { Building2, Factory, ShoppingCart, HeartPulse, GraduationCap, House, Landmark };

export default function IndustryItem({ name, icon }) {
  const Icon = ICONS[icon];
  return (
    <a href="#contact" className="group flex flex-col items-center gap-2 py-3 text-center text-navy transition hover:-translate-y-1">
      <Icon size={34} strokeWidth={1.4} className="transition group-hover:text-brand" />
      <span className="text-[13px] font-semibold">{name}</span>
    </a>
  );
}
