
"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  isValidEmail,
  subscribeToNewsletter,
} from "@/lib/newsletter";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    type: "idle",
    msg: "",
  });

  async function onSubmit(e) {
    e.preventDefault();

    const trimmedEmail = email.trim();

    // Email validation
    if (!isValidEmail(trimmedEmail)) {
      setStatus({
        type: "error",
        msg: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({
      type: "loading",
      msg: "",
    });

    try {
      await subscribeToNewsletter(trimmedEmail);

      setStatus({
        type: "success",
        msg: "Thanks! Your email has been received.",
      });

      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="w-full"
    >
      {/* Email Input and Subscribe Button */}
      <div
        className="
          flex h-12 w-full
          overflow-hidden
          rounded-lg
          border border-white/30
          bg-white/10
          transition-all duration-300
          focus-within:border-blue-400
          focus-within:ring-2
          focus-within:ring-blue-400/20
        "
      >
        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>

        <input
          id="nl-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);

            if (status.type !== "idle") {
              setStatus({ type: "idle", msg: "" });
            }
          }}
          placeholder="Your Email Address"
          autoComplete="email"
          aria-label="Your Email Address"
          aria-invalid={status.type === "error"}
          disabled={status.type === "loading"}
          className="
            h-full min-w-0 flex-1
            bg-transparent
            px-4
            text-sm text-white
            outline-none
            placeholder:text-white/60
            disabled:opacity-60
          "
        />

        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          disabled={status.type === "loading"}
          className="
            grid h-full w-[70px] shrink-0
            place-items-center
            bg-[#ed0028]
            text-white
            transition-all duration-300
            hover:bg-red-700
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {status.type === "loading" ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <ArrowRight size={20} />
          )}
        </button>
      </div>

      {/* Success / Error Message */}
      <p
        role={status.type === "error" ? "alert" : "status"}
        aria-live="polite"
        className={`
          mt-2 min-h-[18px] text-xs font-medium
          ${
            status.type === "error"
              ? "text-red-300"
              : status.type === "success"
              ? "text-emerald-300"
              : "text-white/70"
          }
        `}
      >
        {status.type === "loading"
          ? "Submitting your email..."
          : status.msg}
      </p>
    </form>
  );
}
