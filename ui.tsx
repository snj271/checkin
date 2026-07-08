import { useEffect, type ReactNode } from "react";
import { useReveal } from "../lib/hooks";

/* ============================================================
   ICONS — single source, named by string
   ============================================================ */
const paths: Record<string, ReactNode> = {
  truck: (
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12 12 3h7v7l-9 9z" />
      <circle cx="15.5" cy="8.5" r="1.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6Z" />
      <path d="M19 14c.3 1.7.7 2.1 2.4 2.4-1.7.3-2.1.7-2.4 2.4-.3-1.7-.7-2.1-2.4-2.4 1.7-.3 2.1-.7 2.4-2.4Z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.38 8.38 0 0 1-12 7.6L3 21l1.9-6A8.5 8.5 0 1 1 21 11.5Z" />
  ),
  package: (
    <>
      <path d="m12 2 9 5v10l-9 5-9-5V7z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2Zm5.8 14.2c-.25.7-1.44 1.33-1.99 1.37-.53.05-1.02.23-3.44-.72-2.9-1.14-4.74-4.1-4.88-4.29-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.11 1-2.4.25-.28.55-.35.73-.35l.53.01c.17.01.4-.06.62.48.25.6.81 2.07.88 2.22.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.15.26.1 1.66.78 1.95.93.29.15.48.22.55.34.07.12.07.69-.18 1.39Z"
    />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </>
  ),
  google: (
    <>
      <path d="M21.35 11.1H12v3.8h5.35c-.5 2.4-2.6 4.1-5.35 4.1A6.5 6.5 0 0 1 5.5 12 6.5 6.5 0 0 1 12 5.5c1.7 0 3.2.6 4.4 1.7l2.7-2.7A9.8 9.8 0 0 0 12 2 10 10 0 1 0 22 10 10 0 0 0 21.35 11.1Z" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  star: <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z" />,
  pin: (
    <>
      <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  gem: (
    <>
      <path d="M6 3h12l3 6-9 12L3 9z" />
      <path d="M3 9h18M9 3 6 9l6 12M15 3l3 6-6 12" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 9-4 16-9 16Z" />
      <path d="M4 20c4-4 8-6 11-7" />
    </>
  ),
  quote: (
    <path d="M7 7H4a4 4 0 0 0-1 3v4h5v-5H4m10 5V9h4v5h-4Z" opacity="0.0" />
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}

/* ============================================================
   REVEAL — scroll-triggered animation wrapper
   ============================================================ */
type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "zoom" | "left" | "right" | "none";
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

export function Reveal({ children, className = "", variant = "up", delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useReveal();
  const variantClass =
    variant === "none" ? "" : variant === "up" ? "reveal" : `reveal reveal-${variant}`;
  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ============================================================
   LOGO
   ============================================================ */
export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`} aria-label="Shree Narayan Jewellers home">
      <span className="relative grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-gradient-to-br from-wine to-wine-deep shadow-lg shadow-black/30">
        <span className="absolute inset-1 rounded-full border border-gold/30" />
        <Icon name="gem" className="h-5 w-5 text-gold-light" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.05rem] font-bold tracking-wide ${light ? "text-cream" : "text-ink"}`}>
          Shree Narayan
        </span>
        <span className="eyebrow text-[0.58rem] text-gold">Jewellers · Wholesale</span>
      </span>
    </a>
  );
}

/* ============================================================
   SECTION TITLE
   ============================================================ */
export function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-2 text-[0.7rem] text-gold">
            <span className="h-px w-6 bg-gold/60" />
            {eyebrow}
            <span className="h-px w-6 bg-gold/60" />
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`font-display text-4xl font-bold leading-tight sm:text-5xl ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          {title} {highlight && <span className="text-gold-gradient italic">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className={`max-w-xl text-base leading-relaxed ${light ? "text-cream/70" : "text-ink-soft/80"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ============================================================
   STAR RATING — display or interactive
   ============================================================ */
export function Stars({
  value,
  size = "h-4 w-4",
  onRate,
  interactive = false,
}: {
  value: number;
  size?: string;
  onRate?: (v: number) => void;
  interactive?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-0.5 ${interactive ? "cursor-pointer" : ""}`} role={interactive ? "radiogroup" : undefined}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.round(value);
        return (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onRate?.(i)}
            className={`${interactive ? "transition-transform hover:scale-125" : "cursor-default"} ${
              filled ? "text-gold" : "text-gold/25"
            }`}
            aria-label={`${i} star${i > 1 ? "s" : ""}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className={size}>
              <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
export function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNav: (dir: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-wine-night/95 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold/10"
        onClick={onClose}
        aria-label="Close"
      >
        <Icon name="close" className="h-6 w-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold/10 sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            aria-label="Previous"
          >
            <Icon name="chevron" className="h-7 w-7 rotate-90" />
          </button>
          <button
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold/10 sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            aria-label="Next"
          >
            <Icon name="chevron" className="h-7 w-7 -rotate-90" />
          </button>
        </>
      )}

      <figure className="relative max-h-[85vh] max-w-5xl animate-zoom-in" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt="Enlarged view"
          className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl ring-1 ring-gold/30"
        />
        <figcaption className="mt-3 text-center font-script text-sm tracking-widest text-gold-light">
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
}
