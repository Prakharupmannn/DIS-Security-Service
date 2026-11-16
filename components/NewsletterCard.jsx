
import { Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterCard() {
  return (
    <section className="relative z-10 bg-gradient-to-b from-navy to-deep px-[5%] py-8 sm:py-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="relative isolate overflow-hidden rounded-2xl border border-blue-400/70 bg-gradient-to-r from-[#102849] via-[#10213d] to-[#142c50] px-5 py-7 shadow-xl sm:px-8 lg:px-8 lg:py-7">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -right-10 -z-10 h-48 w-72 rotate-[-15deg] rounded-full bg-blue-500/20 blur-2xl" />

          {/* Main Content */}
          <div className="relative z-10 grid items-center gap-7 lg:grid-cols-[1.15fr_0.85fr_140px] lg:gap-6">

            {/* Icon and Heading */}
            <div className="flex items-center gap-5">

              <div className="grid h-[70px] w-[70px] shrink-0 place-items-center rounded-2xl border border-blue-400/30 bg-blue-500/15 shadow-inner">
                <Mail
                  size={36}
                  strokeWidth={1.6}
                  className="text-blue-100"
                />
              </div>

              <div className="min-w-0 border-l border-white/40 pl-5">
                <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[26px]">
                  Subscribe to Security Insights
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                  Get the latest security trends, industry updates, and DIS
                  insights delivered to your inbox.
                </p>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="relative z-20 w-full min-w-0
              [&_form]:flex
              [&_form]:w-full
              [&_form]:items-stretch
              [&_form]:gap-0
              [&_input]:!h-12
              [&_input]:!min-w-0
              [&_input]:!flex-1
              [&_input]:!rounded-l-lg
              [&_input]:!rounded-r-none
              [&_input]:!border
              [&_input]:!border-white/30
              [&_input]:!bg-white/10
              [&_input]:!px-4
              [&_input]:!text-sm
              [&_input]:!text-white
              [&_input]:!outline-none
              [&_input]:placeholder:!text-white/60
              [&_input]:focus:!border-blue-400
              [&_button]:!h-12
              [&_button]:!min-w-[70px]
              [&_button]:!shrink-0
              [&_button]:!rounded-l-none
              [&_button]:!rounded-r-lg
              [&_button]:!border-0
              [&_button]:!bg-[#ed0028]
              [&_button]:!text-white
              [&_button]:hover:!bg-red-700
            ">
              <NewsletterForm />
            </div>

            {/* Decorative Envelope */}
            <div className="pointer-events-none relative hidden h-24 items-center justify-center lg:flex">
              <div className="absolute bottom-[-65px] right-[-70px] h-40 w-64 rounded-full bg-blue-500/20" />

              <div className="relative flex h-[76px] w-[100px] items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_12px_35px_rgba(37,99,235,0.4)]">
                <div className="absolute -top-5 h-10 w-10 rotate-45 rounded-sm bg-blue-400" />

                <div className="relative z-10 flex h-[55px] w-[75px] flex-col items-center justify-center gap-1 rounded-md border border-blue-200/60 bg-white shadow-lg">
                  <span className="h-1 w-12 rounded-full bg-blue-300" />
                  <span className="h-1 w-10 rounded-full bg-blue-300" />
                  <span className="h-1 w-7 self-start rounded-full bg-blue-200 ml-3" />
                </div>

                <div className="absolute bottom-0 h-0 w-0 border-x-[50px] border-t-[35px] border-x-transparent border-t-blue-500/90" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
