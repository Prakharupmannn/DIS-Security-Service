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
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Automatically close mobile menu when resizing to desktop screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setExpanded(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  const toggleExpanded = (label) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Main Top Header Bar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/95 shadow-lg shadow-black/20 backdrop-blur-md border-b border-white/10"
            : "bg-gradient-to-b from-deep/90 via-deep/40 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-[5%] lg:h-[84px]">
          <Logo />

          {/* Desktop Navigation */}
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
                  <div className="invisible absolute left-0 top-full min-w-[210px] pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
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

          {/* Desktop Quote Button */}
          <a
            href="#quote"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand/30 transition hover:brightness-110 active:scale-95 lg:inline-flex"
          >
            Get a Quote <ArrowRight size={14} />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-white hover:bg-white/10 active:scale-95 transition lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation-drawer"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full sm:max-w-md flex-col bg-[#061735] text-white shadow-2xl border-l border-white/10 lg:hidden transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0 visible" : "translate-x-full invisible pointer-events-none"
        }`}
      >
        {/* Drawer Header: Logo + Close Button */}
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-white/10 px-6 bg-[#061735]">
          <div onClick={close}>
            <Logo />
          </div>
          <button
            type="button"
            onClick={close}
            className="grid h-11 w-11 place-items-center rounded-lg text-white hover:bg-white/10 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Close navigation menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Drawer Navigation Body */}
        <div
          className="flex-1 overflow-y-auto overscroll-contain px-6 py-5"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <nav aria-label="Mobile Navigation Links">
            <ul className="divide-y divide-white/10">
              {NAV.map((item, idx) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = expanded === item.label;

                return (
                  <li key={item.label} className="py-1">
                    {hasChildren ? (
                      <div className="w-full">
                        {/* Parent Dropdown Button */}
                        <button
                          type="button"
                          onClick={() => toggleExpanded(item.label)}
                          className="flex w-full items-center justify-between py-3.5 text-left text-[16px] font-medium text-white transition hover:text-brand focus-visible:outline-none focus-visible:text-brand"
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-sub-${idx}`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={19}
                            className={`shrink-0 transition-transform duration-300 ease-in-out ${
                              isExpanded ? "rotate-180 text-brand" : "text-white/70"
                            }`}
                          />
                        </button>

                        {/* Submenu in Normal Flow (pushes items below downward naturally) */}
                        <div
                          id={`mobile-sub-${idx}`}
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100 my-1.5"
                              : "grid-rows-[0fr] opacity-0 pointer-events-none my-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="space-y-1.5 rounded-xl border border-white/10 bg-white/[0.05] p-2.5 shadow-inner">
                              {item.children.map((c) => (
                                <li key={c}>
                                  <a
                                    href={item.href}
                                    onClick={close}
                                    className="flex items-center rounded-lg px-3.5 py-2.5 text-[14.5px] leading-snug text-white/90 transition hover:bg-white/10 hover:text-white active:bg-white/15 active:text-brand"
                                  >
                                    {c}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={close}
                        className="flex w-full items-center py-3.5 text-[16px] font-medium text-white transition hover:text-brand focus-visible:outline-none focus-visible:text-brand"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer Action Button */}
          <div className="pt-6 pb-4">
            <a
              href="#quote"
              onClick={close}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 font-semibold text-white shadow-lg shadow-brand/30 transition hover:brightness-110 active:scale-98"
            >
              Get a Quote <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

