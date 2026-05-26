'use client';

import ScrollHero from './components/ScrollHero';

const NAVY = '#1B2A5E';
const PINK = '#E0006B';
const BOOKING_URL = 'https://street.co.uk/beta/platform/book-online/12c195c9-6dcc-45ed-adf9-1c5d7d4fd3c7/valuation/';

const reviews = [
  {
    name: 'Martin Forrest',
    stars: 5,
    date: '2 months ago',
    text: 'I found the entire process with Johnsons to be excellent. I appreciated the high volume of viewings and the consistent feedback provided throughout. Mandy Sinclair managed the administrative tasks efficiently and ensured I was kept informed at every stage. I would highly recommend Johnsons to anyone looking for a reliable partner for their property needs.',
  },
  {
    name: 'Deborah Tweedale Goves',
    stars: 5,
    date: '2 months ago',
    text: 'I can\'t fault their service. Not only were they extremely professional, they were friendly and knowledgeable. They even sent flowers when my husband died — it really did feel that they cared. I never normally write reviews but when you get such good service, everyone should know about it. Johnsons really do deserve every 5 star review they get.',
  },
  {
    name: 'Sarah Maddison',
    stars: 5,
    date: '2 months ago',
    text: 'I cannot thank the team at Johnsons enough — from the minute I enquired about selling my property to completion they were amazing. Mandy kept me up to date the whole time and answered every question I had. It was my first time selling a house and she was an angel throughout it all. I would always recommend the team here. Thank you so much!',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="#FBBC05" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* ── SECTION 1: HERO ── */}
      <ScrollHero />

      {/* ── SECTION 2: COPY + CTA ── */}
      <div className="py-20 px-6" style={{ background: '#F8F8F8' }}>
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: PINK }}>
            Free — No Obligation
          </p>

          {/* Headline */}
          <h2 className="font-bold text-3xl md:text-4xl mb-6 leading-tight" style={{ color: NAVY }}>
            Whatever's Next For You —<br />It Starts With Knowing Your Number.
          </h2>

          {/* Copy */}
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            More space for a growing family. A fresh start somewhere new. Finally making the move you've been putting off for years. Whatever's driving it — the first step is the same: finding out what your home is genuinely worth in today's market.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The problem is most valuations aren't valuations at all. They're a number chosen to impress you enough to sign. Then comes the price reduction. Then the months on the market. Then the stress.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            At Johnsons, we've spent over 20 years giving homeowners across Evesham, Pershore, Broadway and The Lenches the honest answer — backed by real sales data, not ambition. <span className="font-semibold" style={{ color: NAVY }}>Book your free valuation in under 60 seconds.</span>
          </p>

          {/* CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'conversion', { send_to: 'AW-1018725426' });
                (window as any).gtag('event', 'click', { event_category: 'CTA', event_label: 'Book Valuation Section 2' });
              }
            }}
            className="inline-block px-10 py-4 rounded-full font-bold text-white text-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: PINK, boxShadow: '0 4px 24px rgba(224,0,107,0.3)' }}
          >
            Book My Free Valuation →
          </a>

          {/* Reassurance */}
          <p className="text-gray-400 text-sm mt-4">Takes less than 60 seconds · No commitment required</p>
        </div>
      </div>

      {/* ── SECTION 3: REVIEWS + RECENTLY SOLD ── */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              {/* Google logo colours */}
              <span className="font-bold text-lg" style={{ color: '#4285F4' }}>G</span>
              <span className="font-semibold text-gray-700">Google Reviews</span>
              <span className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4" fill="#FBBC05" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span className="font-semibold text-gray-700">4.9 / 5 · 267 reviews</span>
            </div>
            <h2 className="font-bold text-3xl" style={{ color: NAVY }}>What Our Clients Say</h2>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <StarRating count={r.stars} />
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm" style={{ color: NAVY }}>{r.name}</span>
                  <span className="text-gray-400 text-xs">{r.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recently sold property — replace /sold.jpg with your photo */}
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row" style={{ background: NAVY }}>
            <div className="md:w-1/2 h-64 md:h-auto relative">
              {/* TODO: Replace /sold.jpg with your recently sold property photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/greenacres2.webp"
                alt="Greenacres, Church Lench"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: PINK }}>
                ✨ Featured Property
              </div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-3">Church Lench, Worcestershire</p>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">
                Greenacres, Church Lench
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                A substantial six-bedroom detached village residence, set within an impressive 0.48-acre plot in the heart of one of the Vale of Evesham's most sought-after villages. Over 3,000 sq.ft of beautifully proportioned accommodation — no onward chain.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="text-xs font-semibold bg-white/10 rounded-full px-3 py-1 text-white/80">6 Bedrooms</span>
                <span className="text-xs font-semibold bg-white/10 rounded-full px-3 py-1 text-white/80">0.48-Acre Plot</span>
                <span className="text-xs font-semibold bg-white/10 rounded-full px-3 py-1 text-white/80">No Onward Chain</span>
                <span className="text-xs font-semibold bg-white/10 rounded-full px-3 py-1 text-white/80">£725,000</span>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', { send_to: 'AW-1018725426' });
                    (window as any).gtag('event', 'click', { event_category: 'CTA', event_label: 'Book Valuation Sold Section' });
                  }
                }}
                className="inline-block px-8 py-4 rounded-full font-bold text-white text-base transition-all hover:scale-105 self-start"
                style={{ background: PINK }}
              >
                Get My Free Valuation →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 4: FOOTER / BRANDING ── */}
      <div className="py-16 px-6 text-white" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto">

          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
            {/* Logo / name */}
            <div>
              <p className="font-bold text-2xl tracking-tight">Johnsons</p>
              <p className="text-white/60 text-sm">Property Consultants</p>
              <div className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5" fill="#FBBC05" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white/60 text-xs ml-1">British Property Awards 2025 Gold Winner</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-white text-lg transition-all hover:scale-105 whitespace-nowrap"
              style={{ background: PINK }}
            >
              Book Free Valuation
            </a>
          </div>

          {/* Links row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
            {/* Contact */}
            <div className="flex flex-col gap-2 text-sm text-white/70 text-center md:text-left">
              <a href="tel:01386761515" className="hover:text-white transition-colors">📞 01386 761515</a>
              <a href="mailto:evesham@johnsons-property.co.uk" className="hover:text-white transition-colors">✉️ evesham@johnsons-property.co.uk</a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 text-sm flex-wrap justify-center md:justify-end">
              <a href="https://www.johnsons-property.co.uk" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                🌐 Website
              </a>
              <a href="https://www.facebook.com/JohnsonsEvesham/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://x.com/JohnsonsEvesham" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                X / Twitter
              </a>
              <a href="https://www.linkedin.com/company/johnsons-property-consultants/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <p className="text-white/30 text-xs text-center mt-10">
            © {new Date().getFullYear()} Johnsons Property Consultants · Estate Agents & Letting Agents · Evesham, Worcestershire
          </p>
        </div>
      </div>

    </main>
  );
}
