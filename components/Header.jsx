"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "@/data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-navy/95 shadow-lg shadow-black/20 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-b from-deep/90 via-deep/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-[5%] lg:h-[84px]">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Main">
          {NAV.map((item, i) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className={`relative flex items-center gap-1.5 py-2 text-[13px] font-medium text-white/90 transition hover:text-white ${
                  i === 0 ? "text-white" : ""
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={13} className="transition group-hover:rotate-180" />}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand transition-all duration-300 ${
                    i === 0 ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-[210px] pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <ul className="fade-down overflow-hidden rounded-md border border-white/10 bg-navy/95 py-2 shadow-xl backdrop-blur">
                    {item.children.map((c) => (
                      <li key={c}>
                        <a
                          href={item.href}
                          className="block px-4 py-2.5 text-[13px] text-white/85 transition hover:bg-white/10 hover:text-white"
                        >
                          {c}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <a
          href="#quote"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand/30 transition hover:brightness-110 active:scale-95 lg:inline-flex"
        >
          Get a Quote <ArrowRight size={14} />
        </a>

        <button
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white hover:bg-white/10 active:scale-95 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="fade-down absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-navy/98 px-[5%] pb-8 pt-2 shadow-2xl backdrop-blur-xl lg:hidden">
          <ul className="divide-y divide-white/10">
            {NAV.map((item) => (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    onClick={close}
                    className="flex-1 py-3.5 text-[15px] font-medium text-white transition hover:text-brand"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      className="grid h-11 w-11 place-items-center text-white/80 hover:text-white"
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      aria-label={`Toggle ${item.label}`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${expanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <ul className="mb-2 space-y-1 rounded-md bg-white/5 py-2 pl-4 pr-2">
                    {item.children.map((c) => (
                      <li key={c}>
                        <a
                          href={item.href}
                          onClick={close}
                          className="block py-2 text-sm text-white/80 transition hover:text-white"
                        >
                          {c}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            onClick={close}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 font-semibold text-white shadow-lg shadow-brand/30 transition hover:brightness-110 active:scale-98"
          >
            Get a Quote <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
