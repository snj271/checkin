import { useEffect, useState } from "react";
import { business, heroStats, heroWords, waLink } from "../lib/data";
import { useCountUp, useReveal } from "../lib/hooks";
import { Icon, Stars } from "./ui";

function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

function Stat({ stat, active, delay }: { stat: (typeof heroStats)[number]; active: boolean; delay: number }) {
  const val = useCountUp(stat.value, active, 1800, stat.decimals);
  return (
    <div className="text-center sm:text-left" style={{ transitionDelay: `${delay}ms` }}>
      <div className="font-display text-3xl font-bold text-gold-light sm:text-4xl">
        {val}
        {stat.suffix}
      </div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-widest text-cream/55">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(heroWords);
  const { ref, inView } = useReveal({ threshold: 0.3 });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-wine-night">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8306531/pexels-photo-8306531.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury diamond jewellery set"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-wine-night via-wine-night/85 to-wine-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-night via-transparent to-wine-night/60" />
      </div>

      {/* Decorative glows + rings */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-rose/10 blur-3xl" />
        <svg className="absolute -right-24 top-16 h-72 w-72 animate-spin-slow text-gold/15" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
        </svg>
        {/* sparkles */}
        {[
          { t: "18%", l: "12%", d: "0s" },
          { t: "30%", l: "82%", d: "1.1s" },
          { t: "68%", l: "20%", d: "2.2s" },
          { t: "55%", l: "70%", d: "0.6s" },
          { t: "80%", l: "48%", d: "1.7s" },
        ].map((s, i) => (
          <svg
            key={i}
            className="animate-sparkle absolute h-5 w-5 text-gold-light"
            style={{ top: s.t, left: s.l, animationDelay: s.d }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c.7 6 2.3 7.6 8.3 8.3C14.3 9 12.7 10.6 12 16.6 11.3 10.6 9.7 9 3.7 8.3 9.7 7.6 11.3 6 12 0Z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div className="reveal in-view">
            {/* Badge */}
            <div className="enter mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs text-cream/90 backdrop-blur" style={{ animationDelay: "0.1s" }}>
              <Stars value={business.googleRating} size="h-3.5 w-3.5" />
              <span className="font-medium text-gold-light">{business.googleRating}</span>
              <span className="h-3 w-px bg-gold/30" />
              <span className="hidden sm:inline">{business.reviewCount} Google Reviews · Sadar Bazar, Delhi</span>
              <span className="sm:hidden">{business.reviewCount} Reviews</span>
            </div>

            <h1 className="enter font-display text-5xl font-bold leading-[1.05] text-cream sm:text-6xl xl:text-7xl" style={{ animationDelay: "0.2s" }}>
              India's Finest
              <br />
              <span className="text-gold-gradient italic">Wholesale</span> Jewellery
            </h1>

            {/* Typewriter */}
            <p className="enter mt-5 flex items-center font-script text-xl tracking-wide text-cream/85 sm:text-2xl" style={{ animationDelay: "0.35s" }}>
              <span className="text-gold">Now Showing:</span>
              <span className="ml-2 inline-flex">
                <span className="text-cream">{typed}</span>
                <span className="animate-blink ml-0.5 text-gold-light">|</span>
              </span>
            </p>

            <p className="enter mt-5 max-w-xl text-base leading-relaxed text-cream/70" style={{ animationDelay: "0.45s" }}>
              Wholesale rings, bangles, earrings, necklace sets &amp; trending designs — directly from
              our wholesale floor at Krishna Market, Sadar Bazar. Unbeatable prices. Unmatched quality.
            </p>

            {/* Trust chips */}
            <div className="enter mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-cream/70" style={{ animationDelay: "0.55s" }}>
              {["Wholesale Only", "Minimum Order ₹3,000", "Pan-India Delivery"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-gold" /> {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="enter mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.65s" }}>
              <a
                href={waLink("Hi! I'd like your latest wholesale catalogue & price list.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold"
              >
                <Icon name="whatsapp" className="h-5 w-5" /> Get Wholesale Prices
              </a>
              <a
                href="#collections"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium"
              >
                Explore Collections <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>

            {/* Stats */}
            <div ref={ref} className="enter reveal mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-gold/15 pt-7 sm:grid-cols-4" style={{ animationDelay: "0.8s" }}>
              {heroStats.map((s, i) => (
                <Stat key={s.label} stat={s} active={inView} delay={i * 120} />
              ))}
            </div>
          </div>

          {/* Right: floating image showcase */}
          <div className="enter relative hidden lg:block" style={{ animationDelay: "0.4s" }}>
            <div className="relative mx-auto max-w-md">
              <div className="animate-floaty overflow-hidden rounded-[2rem] border border-gold/25 shadow-2xl shadow-black/50">
                <img
                  src="https://images.pexels.com/photos/35059564/pexels-photo-35059564.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Featured bridal jewellery set"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              {/* floating mini cards */}
              <div className="animate-floaty-slow absolute -left-10 bottom-16 w-40 overflow-hidden rounded-2xl border border-gold/30 shadow-xl shadow-black/40">
                <img
                  src="https://images.pexels.com/photos/8306528/pexels-photo-8306528.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Bracelet"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="animate-floaty absolute -right-8 top-10 w-36 overflow-hidden rounded-2xl border border-gold/30 shadow-xl shadow-black/40">
                <img
                  src="https://images.pexels.com/photos/20943478/pexels-photo-20943478.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Earrings"
                  className="aspect-square w-full object-cover"
                />
              </div>
              {/* price tag chip */}
              <div className="absolute -bottom-5 right-6 rounded-2xl border border-gold/30 bg-wine-night/90 px-5 py-3 text-center backdrop-blur">
                <div className="text-[0.65rem] uppercase tracking-widest text-cream/60">Rings from</div>
                <div className="font-display text-2xl font-bold text-gold-light">₹9</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 transition hover:text-gold-light sm:flex"
      >
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-cream/30 p-1">
          <span className="animate-bob h-2 w-1 rounded-full bg-gold" />
        </span>
      </a>
    </section>
  );
}
