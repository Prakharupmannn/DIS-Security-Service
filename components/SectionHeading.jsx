export default function SectionHeading({ eyebrow, title, align = "left", light = false, line = "left" }) {
  const center = align === "center";
  return (
    <div className={center ? "text-center" : ""}>
      <div className={`flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        {line === "left" && <span className="h-[3px] w-7 bg-brand shrink-0" />}
        <span className={`text-[11px] font-bold uppercase tracking-wider sm:text-xs ${light ? "text-brand" : "text-navy"}`}>{eyebrow}</span>
      </div>
      <h2 className={`mt-2 font-bold leading-tight ${light ? "text-white" : "text-navy"}`} style={{ fontSize: "clamp(1.35rem, 2.8vw, 2.1rem)" }}>{title}</h2>
    </div>
  );
}
