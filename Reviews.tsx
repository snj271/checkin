import { useEffect, useState } from "react";
import { business, seedReviews, type Review } from "../lib/data";
import { Icon, Reveal, SectionTitle, Stars } from "./ui";

const STORAGE_KEY = "snj_reviews_v1";
const GOOGLE_LOGO = (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.43.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335" />
  </svg>
);

export default function Reviews() {
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setUserReviews(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || rating === 0) return;
    const review: Review = {
      name: name.trim(),
      place: place.trim() || "India",
      rating,
      text: text.trim(),
      initial: name.trim()[0].toUpperCase(),
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    };
    const next = [review, ...userReviews];
    setUserReviews(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setName("");
    setPlace("");
    setText("");
    setRating(0);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const allReviews = [...userReviews, ...seedReviews];
  const avg = allReviews.reduce((a, r) => a + r.rating, 0) / Math.max(allReviews.length, 1);

  return (
    <section id="reviews" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream-200/60 to-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Customer Reviews" title="What Our" highlight="Customers Say" />

        {/* Google rating summary */}
        <Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-6 rounded-3xl border border-gold/20 bg-white p-7 shadow-lg shadow-wine/5 sm:flex-row">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-wine to-wine-deep text-cream">
                <svg viewBox="0 0 24 24" className="h-9 w-9">{GOOGLE_LOGO.props.children}</svg>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-ink">{business.googleRating}</span>
                  <Stars value={avg} size="h-5 w-5" />
                </div>
                <p className="mt-1 text-sm text-ink-soft/70">
                  Rated <strong className="text-wine">{business.googleRating}</strong> from {business.reviewCount}+ Google reviews
                </p>
              </div>
            </div>
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-wine/20 bg-cream px-5 py-3 text-sm font-semibold text-wine transition hover:bg-wine hover:text-cream"
            >
              {GOOGLE_LOGO}
              Write a Google Review
            </a>
          </div>
        </Reveal>

        {/* Review cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allReviews.map((r, i) => (
            <Reveal key={`${r.name}-${i}`} delay={(i % 3) * 90}>
              <figure className="card-lift flex h-full flex-col rounded-3xl border border-gold/15 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <Stars value={r.rating} size="h-4 w-4" />
                  <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold/25" fill="currentColor">
                    <path d="M9.5 7H5a3 3 0 0 0-3 3v7h7v-7H5a1.5 1.5 0 0 1 1.5-1.5h3V7Zm10 0H15a3 3 0 0 0-3 3v7h7v-7h-4a1.5 1.5 0 0 1 1.5-1.5h3V7Z" />
                  </svg>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft/85">“{r.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-gold/10 pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold font-display text-sm font-bold text-wine-deep">
                    {r.initial}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">{r.name}</div>
                    <div className="text-xs text-ink-soft/60">
                      {r.place}
                      {r.date && <span> · {r.date}</span>}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Review form */}
        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-gold/20 bg-white p-7 shadow-lg shadow-wine/5 sm:p-9">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-ink">Share Your Experience</h3>
              <p className="mt-1 text-sm text-ink-soft/70">Your review helps other buyers trust us</p>
            </div>

            {submitted && (
              <div className="animate-zoom-in mt-6 flex items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                <Icon name="check" className="h-5 w-5" /> Thank you! Your review has been posted.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="flex flex-col items-center">
                <span className="mb-2 text-xs uppercase tracking-widest text-ink-soft/60">Your Rating</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => {
                    const active = (hover || rating) >= i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(i)}
                        className="transition-transform hover:scale-125"
                        aria-label={`Rate ${i} stars`}
                      >
                        <svg viewBox="0 0 24 24" className="h-8 w-8" fill={active ? "#c19a3f" : "#e6d9b8"}>
                          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name *"
                  className="w-full rounded-xl border border-gold/25 bg-cream/40 px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                />
                <input
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="City (optional)"
                  className="w-full rounded-xl border border-gold/25 bg-cream/40 px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                />
              </div>

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                rows={4}
                placeholder="Tell us about your experience... *"
                className="w-full resize-none rounded-xl border border-gold/25 bg-cream/40 px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
              />

              <button type="submit" className="btn-gold w-full rounded-full px-6 py-3.5 font-semibold">
                Post Review
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
