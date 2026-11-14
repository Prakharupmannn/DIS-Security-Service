"use client";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "@/data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const close = () => { setOpen(false); setExpanded(null); };

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-[75px] items-center justify-between px-[5%] lg:h-[85px]">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Main">
          {NAV.map((item, i) => (
            <div key={item.label} className="group relative">
              <a href={item.href} className={`relative flex items-center gap-1 py-2 text-[13px] text-white/90 transition hover:text-white ${i === 0 ? "text-white" : ""}`}>
                {item.label}
                {item.children && <ChevronDown size={13} className="transition group-hover:rotate-180" />}
                <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand transition-all duration-300 ${i === 0 ? "w-full" : "w-0 group-hover:w-full"}`} />
              </a>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-[210px] pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <ul className="fade-down overflow-hidden rounded-md border border-white/10 bg-navy/95 py-2 shadow-xl backdrop-blur">
                    {item.children.map((c) => (
                      <li key={c}><a href={item.href} className="block px-4 py-2 text-[13px] text-white/85 hover:bg-white/10 hover:text-white">{c}</a></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <a href="#quote" className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-brand/30 transition hover:brightness-110 lg:inline-flex">
          Get a Quote <ArrowRight size={14} />
        </a>

        <button className="grid h-11 w-11 place-items-center text-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="fade-down absolute inset-x-0 top-full max-h-[calc(100vh-75px)] overflow-y-auto bg-navy px-[5%] pb-6 shadow-2xl lg:hidden">
          <ul>
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <a href={item.href} onClick={close} className="flex-1 py-3.5 text-[15px] text-white">{item.label}</a>
                  {item.children && (
                    <button className="grid h-11 w-11 place-items-center text-white" onClick={() => setExpanded(expanded === item.label ? null : item.label)} aria-label={`Toggle ${item.label}`}>
                      <ChevronDown size={18} className={`transition ${expanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <ul className="pb-3 pl-4">
                    {item.children.map((c) => <li key={c}><a href={item.href} onClick={close} className="block py-2 text-sm text-white/75">{c}</a></li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a href="#quote" onClick={close} className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-brand font-semibold text-white">Get a Quote <ArrowRight size={16} /></a>
        </div>
      )}
    </header>
  );
}
