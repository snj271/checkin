import { business, waLink } from "../lib/data";
import { Icon, Reveal, SectionTitle } from "./ui";

const values = [
  {
    title: "Premium Quality, Guaranteed",
    desc: "Anti-tarnish, long-lasting materials with a rich gold finish that always looks the part.",
    icon: "shield",
  },
  {
    title: "New Designs Every Week",
    desc: "Fresh trending stock lands weekly — Korean, bridal, everyday & seasonal collections.",
    icon: "sparkle",
  },
  {
    title: "True Wholesale Pricing",
    desc: "Direct from the manufacturer. Rings from ₹9, earrings from ₹14, with bulk discounts.",
    icon: "tag",
  },
];

const trust = ["GST Verified Shop", "Pan-India Delivery", "Reseller Friendly", "Bulk Orders Welcome"];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-cream">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-rose/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Visual */}
        <Reveal variant="left" className="relative">
          <div className="relative">
            <div className="img-zoom overflow-hidden rounded-[2rem] shadow-2xl shadow-wine/20 ring-1 ring-gold/15">
              <img
                src="https://images.pexels.com/photos/29038003/pexels-photo-29038003.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Traditional Indian jewellery craftsmanship"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* floating stat card */}
            <div className="absolute -right-4 top-8 rounded-2xl border border-gold/20 bg-cream/95 px-5 py-4 shadow-xl backdrop-blur sm:-right-8">
              <div className="font-display text-3xl font-bold text-wine">1000+</div>
              <div className="text-[0.65rem] uppercase tracking-widest text-ink-soft/70">Unique Designs</div>
            </div>

            {/* location badge */}
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-gold/20 bg-wine px-5 py-3.5 text-cream shadow-xl sm:left-8">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15">
                <Icon name="pin" className="h-5 w-5 text-gold-light" />
              </span>
              <div>
                <div className="text-sm font-semibold">Krishna Market</div>
                <div className="text-[0.7rem] text-cream/70">Sadar Bazar, Delhi</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <SectionTitle
            align="left"
            eyebrow="About Us"
            title="Where Tradition Meets"
            highlight="Elegance"
            subtitle="At Shree Narayan Jewellers, every piece tells a story. Rooted in the heart of India's largest wholesale market — Sadar Bazar, Delhi — we blend traditional craftsmanship with modern design sensibility."
          />

          <Reveal delay={120}>
            <p className="mt-5 text-base leading-relaxed text-ink-soft/85">
              From intricate anti-tarnish rings starting at just ₹9, to stunning Bahubali earrings,
              Korean-inspired designs, bangles, necklace sets and trending jewellery — we serve individual
              buyers, resellers and large wholesale clients alike. Minimum orders, maximum value.
            </p>
          </Reveal>

          {/* Value cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="card-lift h-full rounded-2xl border border-gold/15 bg-white/60 p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-wine/5 text-wine">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* trust row */}
          <Reveal delay={150}>
            <div className="mt-8 flex flex-wrap gap-3">
              {trust.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold-soft/40 px-3.5 py-1.5 text-xs font-medium text-wine"
                >
                  <Icon name="check" className="h-3.5 w-3.5 text-gold" /> {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={waLink("Hi! I'd like to know more about Shree Narayan Jewellers.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Talk to Us
            </a>
            <span className="ml-4 text-sm text-ink-soft/60">or call {business.phoneDisplay}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
