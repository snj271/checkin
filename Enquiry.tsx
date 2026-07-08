import { useState } from "react";
import { business, waLink } from "../lib/data";
import { Icon, Reveal, SectionTitle } from "./ui";

const categories = ["Rings", "Earrings & Sets", "Traditional & Bridal", "Wholesale Lots", "Other"];
const slots = ["10:00 AM – 12:00 PM", "12:00 PM – 2:00 PM", "2:00 PM – 4:00 PM", "4:00 PM – 6:00 PM"];

const inputCls =
  "w-full rounded-xl border border-gold/20 bg-cream/40 px-4 py-3 text-sm text-cream placeholder-cream/40 outline-none transition focus:border-gold focus:bg-wine-night/40 focus:ring-2 focus:ring-gold/20";

function ContactCard({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="card-lift flex items-center gap-4 rounded-2xl border border-gold/15 bg-white/[0.04] p-5 backdrop-blur transition hover:border-gold/40"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-light">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <div className="text-[0.7rem] uppercase tracking-widest text-cream/50">{label}</div>
        <div className="truncate font-medium text-cream">{value}</div>
      </div>
    </a>
  );
}

export default function Enquiry() {
  const [tab, setTab] = useState<"enquiry" | "visit">("enquiry");

  // enquiry state
  const [e, setE] = useState({ name: "", phone: "", city: "", cat: categories[0], qty: "", msg: "" });
  // visit state
  const [v, setV] = useState({ name: "", phone: "", date: "", slot: slots[0], msg: "" });

  const today = new Date().toISOString().split("T")[0];

  const submitEnquiry = (ev: React.FormEvent) => {
    ev.preventDefault();
    const msg =
      `*New Wholesale Enquiry*%0A` +
      `Name: ${e.name}%0A` +
      `Phone: ${e.phone}%0A` +
      `City: ${e.city}%0A` +
      `Category: ${e.cat}%0A` +
      `Approx Qty: ${e.qty || "—"}%0A` +
      `Message: ${e.msg || "—"}`;
    window.open(`https://wa.me/${business.whatsapp}?text=${msg}`, "_blank");
  };

  const submitVisit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const msg =
      `*Store Visit Request*%0A` +
      `Name: ${v.name}%0A` +
      `Phone: ${v.phone}%0A` +
      `Date: ${v.date}%0A` +
      `Preferred Slot: ${v.slot}%0A` +
      `Notes: ${v.msg || "—"}`;
    window.open(`https://wa.me/${business.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-wine-night">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-rose/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          light
          eyebrow="Get In Touch"
          title="Ready to Order?"
          highlight="Let's Talk."
          subtitle="Call, WhatsApp, or message us — we're available 7 days a week for wholesale enquiries and bulk orders across India."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: contact methods */}
          <div className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon="whatsapp" label="WhatsApp" value={business.phoneDisplay} href={waLink("Hi! I'd like to enquire about wholesale jewellery.")} />
              <ContactCard icon="phone" label="Call Us" value={business.phoneDisplay} href={`tel:${business.phoneDial}`} />
              <ContactCard icon="instagram" label="Instagram" value={business.instagramHandle} href={business.instagramUrl} />
              <ContactCard icon="google" label="Google" value={`${business.googleRating}★ · ${business.reviewCount} reviews`} href={business.googlePlaceUrl} />
            </div>

            <div className="rounded-3xl border border-gold/15 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-light">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-cream">Visit Our Shop</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                {business.address.line1}, {business.address.line2}, {business.address.line3}, {business.address.city}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-cream/60">
                <span className="inline-flex items-center gap-1.5"><Icon name="clock" className="h-4 w-4 text-gold" /> {business.hours}</span>
                <span className="inline-flex items-center gap-1.5"><Icon name="shield" className="h-4 w-4 text-gold" /> GST Verified</span>
              </div>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-gold mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium">
                <Icon name="pin" className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right: form with tabs */}
          <Reveal variant="right">
            <div className="rounded-3xl border border-gold/20 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
              {/* tab toggle */}
              <div className="mb-6 grid grid-cols-2 gap-1 rounded-full border border-gold/20 bg-wine-night/60 p-1">
                {([
                  ["enquiry", "Wholesale Enquiry"],
                  ["visit", "Schedule a Visit"],
                ] as const).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setTab(key)}
                    className={`rounded-full py-2.5 text-sm font-semibold transition-all ${
                      tab === key ? "bg-gradient-to-r from-gold-light to-gold text-wine-deep shadow" : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {tab === "enquiry" ? (
                <form onSubmit={submitEnquiry} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required value={e.name} onChange={(ev) => setE({ ...e, name: ev.target.value })} placeholder="Your name *" className={inputCls} />
                    <input required value={e.phone} onChange={(ev) => setE({ ...e, phone: ev.target.value })} placeholder="Phone / WhatsApp *" className={inputCls} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input value={e.city} onChange={(ev) => setE({ ...e, city: ev.target.value })} placeholder="City" className={inputCls} />
                    <select value={e.cat} onChange={(ev) => setE({ ...e, cat: ev.target.value })} className={inputCls}>
                      {categories.map((c) => (
                        <option key={c} className="bg-wine-night text-cream">{c}</option>
                      ))}
                    </select>
                  </div>
                  <input value={e.qty} onChange={(ev) => setE({ ...e, qty: ev.target.value })} placeholder="Approx. quantity (e.g. 50 pcs)" className={inputCls} />
                  <textarea value={e.msg} onChange={(ev) => setE({ ...e, msg: ev.target.value })} rows={3} placeholder="Tell us what you need (designs, budget, etc.)" className={`${inputCls} resize-none`} />
                  <button type="submit" className="btn-gold flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold">
                    <Icon name="whatsapp" className="h-5 w-5" /> Send Enquiry on WhatsApp
                  </button>
                  <p className="text-center text-xs text-cream/50">Minimum order ₹3,000 · Wholesale only</p>
                </form>
              ) : (
                <form onSubmit={submitVisit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required value={v.name} onChange={(ev) => setV({ ...v, name: ev.target.value })} placeholder="Your name *" className={inputCls} />
                    <input required value={v.phone} onChange={(ev) => setV({ ...v, phone: ev.target.value })} placeholder="Phone / WhatsApp *" className={inputCls} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs text-cream/60">Preferred date</span>
                      <input type="date" min={today} required value={v.date} onChange={(ev) => setV({ ...v, date: ev.target.value })} className={inputCls} />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs text-cream/60">Time slot</span>
                      <select value={v.slot} onChange={(ev) => setV({ ...v, slot: ev.target.value })} className={inputCls}>
                        {slots.map((s) => (
                          <option key={s} className="bg-wine-night text-cream">{s}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <textarea value={v.msg} onChange={(ev) => setV({ ...v, msg: ev.target.value })} rows={3} placeholder="What would you like to see? (optional)" className={`${inputCls} resize-none`} />
                  <button type="submit" className="btn-gold flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold">
                    <Icon name="whatsapp" className="h-5 w-5" /> Request Visit Slot
                  </button>
                  <p className="text-center text-xs text-cream/50">We'll confirm your slot over WhatsApp</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
