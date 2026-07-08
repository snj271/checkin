import { business, steps, waLink } from "../lib/data";
import { Icon, Reveal, SectionTitle } from "./ui";

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream to-cream-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Simple Process" title="How To" highlight="Order" />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 140} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* number badge */}
                  <div className="relative z-10 mb-6 grid h-20 w-20 place-items-center">
                    <span className="absolute inset-0 rounded-full border border-gold/20" />
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-wine to-wine-deep text-gold-light shadow-lg shadow-wine/30">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gold font-display text-xs font-bold text-wine-deep">
                      {s.n}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft/80" dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-3 rounded-3xl border border-gold/20 bg-white/70 px-8 py-6 text-center shadow-sm">
            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-ink-soft">
              <Icon name="clock" className="h-4 w-4 text-gold" />
              <span>Orders before <strong className="text-wine">3:00 PM</strong> ship the same day</span>
              <span className="text-gold">·</span>
              <Icon name="whatsapp" className="h-4 w-4 text-gold" />
              <span>WhatsApp <strong className="text-wine">{business.phoneDisplay}</strong></span>
            </p>
            <a
              href={waLink("Hi! I'd like to place a wholesale order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> Start Your Order
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
