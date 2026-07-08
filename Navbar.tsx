import { useEffect, useState } from "react";
import { business, navLinks, waLink } from "../lib/data";
import { useScrolled, useLockBody } from "../lib/hooks";
import { Icon, Logo } from "./ui";

function AnnouncementBar() {
  const items = [
    { icon: "clock", text: business.hours },
    { icon: "pin", text: "Sadar Bazar, Delhi" },
    { icon: "whatsapp", text: business.phoneDisplay },
    { icon: "shield", text: "GST Verified Business" },
  ];
  return (
    <div className="relative z-50 overflow-hidden bg-wine-deep text-cream/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[0.72rem] sm:text-xs">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="hidden shrink-0 items-center gap-1.5 font-medium text-gold-light sm:flex">
            <Icon name="leaf" className="h-3.5 w-3.5" /> Wholesale Only · Min ₹3,000
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          {items.slice(0, 2).map((it) => (
            <span key={it.text} className="flex items-center gap-1.5">
              <Icon name={it.icon} className="h-3.5 w-3.5 text-gold" />
              <span className="hidden sm:inline">{it.text}</span>
              <span className="sm:hidden">{it.icon === "clock" ? "9AM–7PM" : "Sadar Bazar"}</span>
            </span>
          ))}
          <a
            href={`tel:${business.phoneDial}`}
            className="flex items-center gap-1.5 font-medium text-gold-light transition hover:text-gold"
          >
            <Icon name="phone" className="h-3.5 w-3.5" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="gold-rule" />
    </div>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  useLockBody(open);

  // Active section highlight via IntersectionObserver on sections
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <AnnouncementBar />
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 shadow-[0_10px_40px_-20px_rgba(58,11,27,0.5)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === link.href ? "text-wine" : "text-ink-soft hover:text-wine"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-gold to-wine transition-transform duration-300 ${
                      active === link.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href={waLink("Hi! I'm interested in your wholesale jewellery. Please share your catalogue & prices.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Order on WhatsApp
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-wine transition hover:bg-wine hover:text-cream lg:hidden"
              aria-label="Toggle menu"
            >
              <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </nav>
        <div className={`h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-opacity ${scrolled ? "opacity-100" : "opacity-0"}`} />
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-wine-night/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-gradient-to-b from-wine-deep to-wine-night p-6 shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo light />
            <button
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold-light"
              aria-label="Close menu"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-8 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  style={{ transitionDelay: `${open ? i * 50 + 100 : 0}ms` }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left font-display text-lg transition-all ${
                    active === link.href
                      ? "bg-gold/15 text-gold-light"
                      : "text-cream/80 hover:bg-white/5 hover:text-cream"
                  } ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
                >
                  {link.label}
                  <Icon name="arrowRight" className="h-4 w-4 opacity-50" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3">
            <div className="gold-rule" />
            <a
              href={waLink("Hi! I'm interested in your wholesale jewellery.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Order on WhatsApp
            </a>
            <a
              href={`tel:${business.phoneDial}`}
              className="flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-sm text-gold-light"
            >
              <Icon name="phone" className="h-4 w-4" /> Call {business.phoneDisplay}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
