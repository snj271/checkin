import { features, perks } from "../lib/data";
import { Icon, Reveal, SectionTitle } from "./ui";

export default function Features() {
  return (
    <section id="features" className="section-pad relative overflow-hidden bg-wine-night">
      {/* decorative */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e7c879 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-rose/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          light
          eyebrow="Why Choose Us"
          title="The Shree Narayan"
          highlight="Promise"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="h-full">
              <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-gold/15 bg-white/[0.03] p-7 backdrop-blur">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent text-gold-light">
                  <Icon name={f.icon} className="h-7 w-7" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-bold text-cream">{f.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-cream/65">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* perks strip */}
        <Reveal delay={120}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.label} className="flex items-center gap-4 bg-wine-night p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-light">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-base font-bold text-cream">{p.label}</div>
                  <div className="text-xs text-cream/55">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
