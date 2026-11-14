import { Linkedin, Youtube, Twitter, Facebook } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const QUICK = [["Home", "#home"], ["About Us", "#about"], ["Services", "#services"], ["Industries", "#industries"], ["Careers", "#careers"], ["Contact", "#contact"]];
const SOLUTIONS = ["Security Solutions", "Facility Management", "Cash Logistics", "Event Security"];
const SOCIAL = [[Linkedin, "LinkedIn"], [Youtube, "YouTube"], [Twitter, "X"], [Facebook, "Facebook"]];

// deterministic skyline (no hydration mismatch)
const SKY = Array.from({ length: 46 }, (_, i) => ({ x: i * 26, h: 20 + ((i * 37) % 70), w: 14 + ((i * 11) % 12) }));

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-navy to-deep text-white">
      <svg viewBox="0 0 1200 110" preserveAspectRatio="xMidYMax slice" className="pointer-events-none absolute bottom-10 right-0 h-24 w-full opacity-25 lg:w-2/3" aria-hidden="true">
        {SKY.map((b, i) => <rect key={i} x={b.x} y={110 - b.h} width={b.w} height={b.h} fill="#5b8def" />)}
      </svg>
      <div className="relative mx-auto grid max-w-[1500px] gap-8 px-[5%] py-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.3fr]">
        <div><Logo size="lg" tagline="For a Safer Tomorrow" /></div>
        <nav aria-label="Quick links">
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-xs text-white/85">{QUICK.map(([l, h]) => <li key={l}><a href={h} className="hover:text-white hover:underline">{l}</a></li>)}</ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold">Our Solutions</h3>
          <ul className="mt-3 space-y-2 text-xs text-white/85">{SOLUTIONS.map((l) => <li key={l}><a href="#services" className="hover:text-white hover:underline">{l}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Stay Connected</h3>
          <div className="mt-3 flex gap-3">
            {SOCIAL.map(([Icon, name]) => <a key={name} href="#" aria-label={name} className="grid h-9 w-9 place-items-center rounded-full border border-white/40 transition hover:border-brand hover:bg-brand"><Icon size={16} /></a>)}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Subscribe to Our Newsletter</h3>
          <NewsletterForm />
        </div>
      </div>
      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-2 px-[5%] py-4 text-[11px] text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 DIS Security. All Rights Reserved.</p>
          <p className="flex flex-wrap gap-x-3"><a href="#" className="hover:text-white">Privacy Policy</a>|<a href="#" className="hover:text-white">Terms &amp; Conditions</a>|<a href="#" className="hover:text-white">Sitemap</a></p>
        </div>
      </div>
    </footer>
  );
}
