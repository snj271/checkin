import { useState } from "react";
import { faqs, waLink } from "../lib/data";
import { Icon, Reveal, SectionTitle } from "./ui";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="FAQ" title="Common" highlight="Questions" />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: helper card */}
          <Reveal variant="left" className="h-full">
            <div className="sticky top-28 flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-wine to-wine-deep p-8 text-cream">
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold-light">
                  <Icon name="chat" className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">Still have questions?</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  We reply fast on WhatsApp — ask us anything about pricing, stock, bulk deals or delivery.
                </p>
              </div>
              <a
                href={waLink("Hi! I have a question about your wholesale jewellery.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold"
              >
                <Icon name="whatsapp" className="h-5 w-5" /> Chat With Us
              </a>
            </div>
          </Reveal>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                      isOpen ? "border-gold/40 shadow-md shadow-wine/5" : "border-gold/15"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span className={`font-display text-base font-semibold sm:text-lg ${isOpen ? "text-wine" : "text-ink"}`}>
                        {f.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen ? "rotate-180 border-gold bg-gold text-wine-deep" : "border-gold/30 text-gold"
                        }`}
                      >
                        <Icon name="chevron" className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft/80 sm:px-6">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
