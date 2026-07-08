import { business } from "../lib/data";
import { Icon, Reveal, SectionTitle } from "./ui";

const mapSrc =
  "https://maps.google.com/maps?q=Krishna%20Market%2C%20Sadar%20Bazar%2C%20Delhi%20110006&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function Location() {
  return (
    <section id="location" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream to-cream-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Find Us" title="Visit Our" highlight="Shop" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <Reveal variant="left">
            <div className="overflow-hidden rounded-3xl border border-gold/20 shadow-xl shadow-wine/10">
              <iframe
                title="Shree Narayan Jewellers location"
                src={mapSrc}
                className="h-[360px] w-full lg:h-full lg:min-h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Details */}
          <Reveal variant="right">
            <div className="flex h-full flex-col gap-5">
              {/* Address */}
              <div className="rounded-3xl border border-gold/20 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-wine/5 text-wine">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">Shop Address</h3>
                </div>
                <address className="mt-4 not-italic leading-relaxed text-ink-soft/85">
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                  <br />
                  {business.address.line3}
                  <br />
                  {business.address.city}
                </address>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
                >
                  <Icon name="pin" className="h-4 w-4" /> Get Directions
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Hours */}
                <div className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-wine/5 text-wine">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">Opening Hours</h3>
                  <p className="mt-2 text-sm text-ink-soft/80">Monday – Sunday</p>
                  <p className="text-sm font-semibold text-wine">9:00 AM – 7:00 PM</p>
                  <p className="mt-1 text-xs text-ink-soft/60">Open all 7 days a week</p>
                </div>

                {/* Reach */}
                <div className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-wine/5 text-wine">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">Call / WhatsApp</h3>
                  <a href={`tel:${business.phoneDial}`} className="mt-2 block text-sm font-semibold text-wine">
                    {business.phoneDisplay}
                  </a>
                  <p className="mt-1 text-xs text-ink-soft/60">Fast replies during shop hours</p>
                </div>
              </div>

              {/* How to reach */}
              <div className="rounded-3xl border border-gold/20 bg-wine p-6 text-cream">
                <h3 className="font-script text-sm tracking-widest text-gold-light">HOW TO REACH</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  Near Jhanbalal Dharam Shalla, Telwara Chowk — easily accessible from Sadar Bazar. Just ask
                  for <strong className="text-cream">Krishna Market, 2nd Floor</strong>. We're open all week.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
