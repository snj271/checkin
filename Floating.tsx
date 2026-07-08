import { waLink } from "../lib/data";
import { useScrolled } from "../lib/hooks";
import { Icon } from "./ui";

export default function Floating() {
  const scrolled = useScrolled(500);

  return (
    <div className="fixed bottom-5 right-4 z-[90] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-cream text-wine shadow-lg transition-all duration-300 hover:bg-wine hover:text-cream ${
          scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <Icon name="arrowUp" className="h-5 w-5" />
      </button>

      {/* WhatsApp */}
      <a
        href={waLink("Hi! I'm interested in your wholesale jewellery.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/30 transition-transform hover:scale-110"
      >
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-wine px-3 py-1.5 text-xs font-medium text-cream opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
          Chat with us
        </span>
      </a>
    </div>
  );
}
