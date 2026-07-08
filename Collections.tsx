import { useState } from "react";
import { collections, waLink, type Collection } from "../lib/data";
import { Icon, Lightbox, Reveal, SectionTitle } from "./ui";

function CollectionCard({ c, onOpen }: { c: Collection; onOpen: () => void }) {
  return (
    <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold/15 bg-white shadow-lg shadow-wine/5">
      {/* Image */}
      <button onClick={onOpen} className="img-zoom relative block aspect-[4/3] w-full overflow-hidden" aria-label={`View ${c.title} gallery`}>
        <img src={c.images[0]} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-night/80 via-transparent to-transparent" />
        {/* price chip */}
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-wine-deep shadow">
          {c.price}
        </span>
        {/* gallery hint */}
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-wine-night/70 px-2.5 py-1 text-[0.65rem] font-medium text-cream backdrop-blur">
          <Icon name="search" className="h-3.5 w-3.5" /> {c.images.length} photos
        </span>
        {/* title overlay */}
        <div className="absolute bottom-3 left-4 right-4 text-left">
          <h3 className="font-display text-xl font-bold text-cream drop-shadow">{c.title}</h3>
        </div>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-ink-soft/80">{c.blurb}</p>

        <div className="mt-4 flex items-center gap-2 text-xs text-ink-soft/60">
          <span className="font-semibold text-wine">{c.meta}</span>
          <span className="text-gold">·</span>
          <span>Code: <span className="font-mono font-medium text-ink-soft">{c.code}</span></span>
        </div>

        {/* thumbnails */}
        <div className="mt-4 flex gap-2">
          {c.images.map((img, i) => (
            <button
              key={i}
              onClick={onOpen}
              className="img-zoom h-14 flex-1 overflow-hidden rounded-lg ring-1 ring-gold/15 transition hover:ring-gold/50"
              aria-label={`Open ${c.title} photo ${i + 1}`}
            >
              <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        <a
          href={waLink(`Hi! I want wholesale price for ${c.title} (Code: ${c.code}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
        >
          <Icon name="whatsapp" className="h-4 w-4" /> Request Price
        </a>
      </div>
    </article>
  );
}

export default function Collections() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const open = (c: Collection) => setLightbox({ images: c.images, index: 0 });
  const nav = (dir: number) =>
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + dir + lb.images.length) % lb.images.length } : lb
    );

  return (
    <section id="collections" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream-200/60 to-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Collections"
          title="Our Signature"
          highlight="Collections"
          subtitle="Hundreds of designs across every category — from everyday wear to bridal specials. New stock arrives every week."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <Reveal key={c.id} delay={i * 90} className="h-full">
              <CollectionCard c={c} onOpen={() => open(c)} />
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-gold/20 bg-wine p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-2xl font-bold text-cream">Looking for something specific?</h3>
              <p className="mt-1 text-sm text-cream/70">Send us a photo or describe it — we'll find it from our 1000+ design stock.</p>
            </div>
            <a
              href={waLink("Hi! I'm looking for a specific jewellery design. Let me describe it...")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 font-semibold"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Send Your Request
            </a>
          </div>
        </Reveal>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNav={nav}
        />
      )}
    </section>
  );
}
