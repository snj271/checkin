import { useState } from "react";
import { galleryImages, waLink } from "../lib/data";
import { Icon, Lightbox, Reveal, SectionTitle } from "./ui";

function spanClass(span: string) {
  switch (span) {
    case "tall":
      return "sm:row-span-2";
    case "wide":
      return "sm:col-span-2";
    default:
      return "";
  }
}

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const images = galleryImages.map((g) => g.src);

  return (
    <section id="gallery" className="section-pad relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Our Shop"
          title="Inside Our"
          highlight="Store"
          subtitle="Thousands of designs stocked at our wholesale shop in Sadar Bazar. Visit us in person or order online — Pan-India delivery."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 80}
              className={`img-zoom group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg ring-1 ring-gold/15 ${spanClass(
                img.span
              )}`}
            >
              <button onClick={() => setIndex(i)} className="block h-full w-full" aria-label={`Open photo ${i + 1}`}>
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-night/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 flex items-center gap-1.5 translate-y-2 text-xs font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Icon name="search" className="h-4 w-4 text-gold-light" /> View
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <p className="font-script text-sm tracking-widest text-ink-soft/60">Want the full catalogue?</p>
            <a
              href={waLink("Hi! Please share your full wholesale jewellery catalogue & photos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-3 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> Request Catalogue on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

      {index !== null && (
        <Lightbox
          images={images}
          index={index}
          onClose={() => setIndex(null)}
          onNav={(dir) => setIndex((p) => (p === null ? p : (p + dir + images.length) % images.length))}
        />
      )}
    </section>
  );
}
