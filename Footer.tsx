import { business, navLinks, socialLinks, waLink } from "../lib/data";
import { Icon, Logo } from "./ui";

const quickLinks = [
  { label: "Rings Collection", href: "#collections" },
  { label: "Traditional & Bridal", href: "#collections" },
  { label: "Earrings & Sets", href: "#collections" },
  { label: "Wholesale Lots", href: "#collections" },
  { label: "How to Order", href: "#how-to-order" },
  { label: "Visit Our Shop", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-wine-night pt-16 text-cream">
      <div className="gold-rule mb-14" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              India's finest wholesale jewellery, straight from the heart of Sadar Bazar, Delhi.
              Anti-tarnish quality, unbeatable prices, pan-India delivery.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 text-gold-light transition hover:-translate-y-1 hover:bg-gold hover:text-wine-deep"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="eyebrow text-[0.7rem] text-gold">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream/65 transition hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="eyebrow text-[0.7rem] text-gold">Collections</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-sm text-cream/65 transition hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-[0.7rem] text-gold">Reach Us</h4>
            <ul className="mt-4 space-y-3.5 text-sm text-cream/65">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{business.address.line1}, {business.address.line3}, {business.address.city}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${business.phoneDial}`} className="transition hover:text-gold-light">{business.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="h-4 w-4 shrink-0 text-gold" />
                <span>{business.hours}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="instagram" className="h-4 w-4 shrink-0 text-gold" />
                <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-light">{business.instagramHandle}</a>
              </li>
            </ul>
            <a
              href={waLink("Hi! I'd like to place a wholesale order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> Order Now
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/10 py-6 sm:flex-row">
          <p className="text-center text-xs text-cream/50 sm:text-left">
            © {new Date().getFullYear()} {business.name}. All rights reserved · GST Verified Wholesale Business
          </p>
          <p className="text-xs text-cream/40">
            Crafted with <span className="text-rose">♥</span> for resellers across India
          </p>
        </div>
      </div>
    </footer>
  );
}
