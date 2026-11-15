export function ShieldEmblem({ className = "h-12 w-12" }) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden="true">
      <path d="M32 2 5 12v24c0 17 11 28 27 34 16-6 27-17 27-34V12L32 2Z" fill="#061735" stroke="#fff" strokeWidth="3" />
      <path d="M32 8 11 16v20c0 13 8 22 21 28 13-6 21-15 21-28V16L32 8Z" fill="#E60023" />
      <path d="M32 8v56C19 58 11 49 11 36V16L32 8Z" fill="#C9001D" />
      <path d="m32 20 4.5 9.5 10.5 1.3-7.7 7.2 2 10.3L32 43l-9.3 5.3 2-10.3-7.7-7.2 10.5-1.3L32 20Z" fill="#fff" />
    </svg>
  );
}

export default function Logo({ size = "md", tagline }) {
  const big = size === "lg";
  return (
    <a href="#home" className="flex items-center gap-2 sm:gap-2.5 text-white shrink-0" aria-label="DIS Security home">
      <ShieldEmblem className={big ? "h-11 w-11 sm:h-14 sm:w-14" : "h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12"} />
      <span className="leading-none">
        <span className={`block font-extrabold tracking-wide ${big ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-[28px]"}`}>DIS</span>
        <span className={`block font-bold tracking-wide ${big ? "text-base sm:text-xl lg:text-2xl" : "text-xs sm:text-base lg:text-lg"}`}>SECURITY</span>
        {tagline && <span className="mt-1 block text-[10px] sm:text-xs font-normal text-white/80">{tagline}</span>}
      </span>
    </a>
  );
}
