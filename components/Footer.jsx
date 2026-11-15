import { Linkedin, Youtube, Twitter, Facebook } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const QUICK = [["Home", "#home"], ["About DIS", "#about"], ["Security Solutions", "#services"], ["Industries", "#industries"], ["Careers", "#careers"], ["Get a Proposal", "#quote"]];
const SOLUTIONS = ["Manned Guarding", "Electronic Security & ARC", "ManTech Integrated Solutions", "Event & VIP Protection"];
const SOCIAL = [[Linkedin, "LinkedIn"], [Youtube, "YouTube"], [Twitter, "X"], [Facebook, "Facebook"]];

// deterministic skyline (no hydration mismatch)
const SKY = Array.from({ length: 46 }, (_, i) => ({ x: i * 26, h: 20 + ((i * 37) % 70), w: 14 + ((i * 11) % 12) }));

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-navy to-deep text-white">
      <svg viewBox="0 0 1200 110" preserveAspectRatio="xMidYMax slice" className="pointer-events-none absolute bottom-10 right-0 h-24 w-full opacity-25 lg:w-2/3" aria-hidden="true">
        {SKY.map((b, i) => <rect key={i} x={b.x} y={110 - b.h} width={b.w} height={b.h} fill="#5b8def" />)}
      </svg>
      <div className="relative mx-auto grid max-w-[1500px] gap-8 px-[5%] py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
        <div className="sm:col-span-2 md:col-span-1"><Logo size="lg" tagline="Always By Your Side" /></div>
        <nav aria-label="Quick links">
          <h3 className="text-sm font-semibold tracking-wide">Quick Links</h3>
          <ul className="mt-3 space-y-2.5 text-xs text-white/85">
            {QUICK.map(([l, h]) => (
              <li key={l}>
                <a href={h} className="transition-colors hover:text-white hover:underline underline-offset-4">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold tracking-wide">Our Solutions</h3>
          <ul className="mt-3 space-y-2.5 text-xs text-white/85">
            {SOLUTIONS.map((l) => (
              <li key={l}>
                <a href="#services" className="transition-colors hover:text-white hover:underline underline-offset-4">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide">Stay Connected</h3>
          <div className="mt-3 flex flex-wrap gap-2.5 sm:gap-3">
            {SOCIAL.map(([Icon, name]) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/40 transition hover:border-brand hover:bg-brand active:scale-95"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
          <h3 className="mb-3 text-sm font-semibold tracking-wide">Subscribe to Security Insights</h3>
          <NewsletterForm />
        </div>
      </div>
      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-[5%] py-4 text-[11px] text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DIS Security Services. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <span className="text-white/30" aria-hidden="true">•</span>
            <a href="#" className="transition hover:text-white">Terms &amp; Conditions</a>
            <span className="text-white/30" aria-hidden="true">•</span>
            <a href="#" className="transition hover:text-white">PSARA Compliance</a>
            <span className="text-white/30" aria-hidden="true">•</span>
            <a href="#" className="transition hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
