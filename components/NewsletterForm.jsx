"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { isValidEmail, subscribeToNewsletter } from "@/lib/newsletter";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(email)) return setStatus({ type: "error", msg: "Please enter a valid email address." });
    setStatus({ type: "loading", msg: "" });
    try {
      await subscribeToNewsletter(email);
      setStatus({ type: "success", msg: "Thanks! Your email has been received." });
      setEmail("");
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="flex h-11 overflow-hidden rounded-lg border border-white/30 bg-white/5 transition focus-within:border-brand">
        <label htmlFor="nl-email" className="sr-only">Email address</label>
        <input
          id="nl-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          className="min-w-0 flex-1 bg-transparent px-3.5 text-xs text-white outline-none placeholder:text-white/60"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status.type === "loading"}
          className="grid w-11 shrink-0 place-items-center bg-brand text-white transition hover:bg-brand2 active:scale-95 disabled:opacity-60"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      <p role="status" className={`mt-2 min-h-[1rem] text-xs ${status.type === "error" ? "text-red-300" : "text-emerald-300"}`}>{status.msg}</p>
    </form>
  );
}
