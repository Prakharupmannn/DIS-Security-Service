
import {
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
} from "lucide-react";

import Logo from "./Logo";

const QUICK = [
  ["Home", "#home"],
  ["About DIS", "#about"],
  ["Security Solutions", "#services"],
  ["Industries", "#industries"],
  ["Careers", "#careers"],
  ["Get a Proposal", "#quote"],
];

const SOLUTIONS = [
  "Manned Guarding",
  "Electronic Security & ARC",
  "ManTech Integrated Solutions",
  "Event & VIP Protection",
];

const SOCIAL = [
  [Linkedin, "LinkedIn", "#"],
  [Youtube, "YouTube", "#"],
  [Twitter, "X", "#"],
  [Facebook, "Facebook", "#"],
];

const FOOTER_LINKS = [
  ["Privacy Policy", "#"],
  ["Terms & Conditions", "#"],
  ["PSARA Compliance", "#"],
  ["Sitemap", "#"],
];

// Deterministic skyline - no hydration mismatch
const SKY = Array.from({ length: 65 }, (_, i) => ({
  x: i * 20,
  h: 20 + ((i * 37) % 70),
  w: 12 + ((i * 11) % 8),
}));

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#061832] to-[#020d20] text-white"
    >

      {/* Background Skyline */}
      <svg
        viewBox="0 0 1300 110"
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute bottom-[65px] right-0 -z-10 h-24 w-full opacity-25"
        aria-hidden="true"
      >
        {SKY.map((bar, index) => (
          <rect
            key={index}
            x={bar.x}
            y={110 - bar.h}
            width={bar.w}
            height={bar.h}
            fill="#477dcc"
          />
        ))}
      </svg>

      {/* Main Footer */}
      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-9 px-[5%] py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.25fr_1fr_1.15fr_1fr] lg:gap-8 lg:py-10">

        {/* Company Logo */}
        <div className="sm:col-span-2 md:col-span-1">
          <Logo
            size="lg"
            tagline="Always By Your Side"
          />
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="text-base font-bold tracking-wide">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {QUICK.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-block transition-colors duration-200 hover:text-red-400 hover:underline underline-offset-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Solutions */}
        <div>
          <h3 className="text-base font-bold tracking-wide">
            Our Solutions
          </h3>

          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {SOLUTIONS.map((label) => (
              <li key={label}>
                <a
                  href="#services"
                  className="inline-block transition-colors duration-200 hover:text-red-400 hover:underline underline-offset-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base font-bold tracking-wide">
            Stay Connected
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIAL.map(([Icon, name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/35 text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white hover:-translate-y-1"
              >
                <Icon size={19} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright and Bottom Links */}
      <div className="relative border-t border-white/20">

        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-4 px-[5%] py-5 text-center text-xs text-white/85 md:gap-5 lg:grid-cols-[1fr_auto_1.4fr] lg:text-left">

          {/* Copyright */}
          <div>
            <p>
              © 2026 DIS Security Services. All Rights Reserved.
            </p>
          </div>

          {/* Developer Credit */}
          <div className="border-y border-white/20 py-3 lg:border-y-0 lg:border-x lg:px-8 lg:py-1">
            <p className="whitespace-nowrap text-sm">
              Design and Developed by{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                cybite
              </a>
            </p>
          </div>

          {/* Legal Links */}
          <nav
            aria-label="Footer legal navigation"
            className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 lg:justify-end"
          >
            {FOOTER_LINKS.map(([label, href], index) => (
              <div
                key={label}
                className="flex items-center gap-2.5"
              >
                <a
                  href={href}
                  className="whitespace-nowrap transition-colors duration-200 hover:text-red-400"
                >
                  {label}
                </a>

                {index !== FOOTER_LINKS.length - 1 && (
                  <span
                    className="text-white/30"
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </div>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  );
}
