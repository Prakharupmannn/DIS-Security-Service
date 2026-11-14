"use client";
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SERVICE_OPTIONS } from "@/data/content";
import { submitQuote } from "@/lib/quote";

const EMPTY = { name: "", phone: "", email: "", service: SERVICE_OPTIONS[0], message: "" };
const field = "w-full rounded-md border border-white/25 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/50 focus:border-white/70";

export default function QuoteSection() {
  const [f, setF] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    const x = {};
    if (f.name.trim().length < 2) x.name = "Please enter your name.";
    if (!/^[+]?[\d\s-]{10,15}$/.test(f.phone.trim())) x.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) x.email = "Enter a valid email.";
    setErr(x);
    if (Object.keys(x).length) return;
    setStatus("loading");
    try { await submitQuote(f); setStatus("success"); setF(EMPTY); } catch { setStatus("error"); }
  }

  return (
    <section id="quote" className="relative overflow-hidden bg-gradient-to-br from-navy via-navy2 to-deep px-[5%] py-12 text-white lg:py-16">
      <div className="absolute -left-20 top-0 h-full w-1.5 rotate-[14deg] bg-brand/70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading light eyebrow="Get a Quote" title="Let's Secure Your Premises" />
          <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/85">Tell us about your site and requirements. Our team will get back with a tailored proposal, usually within one working day.</p>
          <ul className="mt-6 space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-3"><Phone size={18} className="text-brand" /> Add your phone number here</li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-brand" /> Add your email here</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-brand" /> Add your office address here</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-lg border border-white/15 bg-white/5 p-5 backdrop-blur sm:grid-cols-2 sm:p-6">
          <div>
            <label htmlFor="q-name" className="mb-1 block text-xs text-white/80">Full Name</label>
            <input id="q-name" className={field} value={f.name} onChange={set("name")} placeholder="Your name" autoComplete="name" />
            {err.name && <p className="mt-1 text-xs text-red-300">{err.name}</p>}
          </div>
          <div>
            <label htmlFor="q-phone" className="mb-1 block text-xs text-white/80">Phone</label>
            <input id="q-phone" type="tel" className={field} value={f.phone} onChange={set("phone")} placeholder="+91 98765 43210" autoComplete="tel" />
            {err.phone && <p className="mt-1 text-xs text-red-300">{err.phone}</p>}
          </div>
          <div>
            <label htmlFor="q-email" className="mb-1 block text-xs text-white/80">Email</label>
            <input id="q-email" type="email" className={field} value={f.email} onChange={set("email")} placeholder="you@company.com" autoComplete="email" />
            {err.email && <p className="mt-1 text-xs text-red-300">{err.email}</p>}
          </div>
          <div>
            <label htmlFor="q-service" className="mb-1 block text-xs text-white/80">Service Required</label>
            <select id="q-service" className={field} value={f.service} onChange={set("service")}>
              {SERVICE_OPTIONS.map((o) => <option key={o} className="text-navy">{o}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="q-msg" className="mb-1 block text-xs text-white/80">Requirements (optional)</label>
            <textarea id="q-msg" rows={4} className={field} value={f.message} onChange={set("message")} placeholder="Location, number of guards, shifts, special needs..." />
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button type="submit" disabled={status === "loading"} className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-7 text-sm font-semibold transition hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60">
              {status === "loading" ? "Sending..." : "Request a Quote"} <Send size={15} />
            </button>
            <p role="status" className={`text-xs ${status === "error" ? "text-red-300" : "text-emerald-300"}`}>
              {status === "success" && "Thank you! We have received your request."}
              {status === "error" && "Something went wrong. Please try again."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
