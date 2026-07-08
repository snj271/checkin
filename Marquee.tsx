import { marqueeItems } from "../lib/data";
import { Icon } from "./ui";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative z-10 -mt-px overflow-hidden border-y border-gold/20 bg-gradient-to-r from-wine-deep via-wine to-wine-deep py-3.5">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-script text-sm tracking-wider text-cream/85">
            <span className="flex items-center gap-2.5">
              <Icon name="gem" className="h-4 w-4 text-gold" />
              {item}
            </span>
            <span className="text-gold/40">✦</span>
          </span>
        ))}
      </div>
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-wine-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-wine-deep to-transparent" />
    </div>
  );
}
