'use client';

import ScrollHero from './components/ScrollHero';
import NavBar from './components/NavBar';

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


export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      <NavBar />

      {/* ── SECTION 1: HERO ── */}
      <ScrollHero />

      {/* ── STATS STRIP ── */}
      <div className="py-6 px-6 bg-white border-b border-gray-100">
        <p className="text-center text-gray-400 text-sm mb-5 tracking-wide">The local team behind thousands of successful sales across the Vale of Evesham.</p>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-bold text-2xl" style={{ color: NAVY }}>20+</p>
            <p className="text-gray-500 text-sm mt-0.5">Years in Worcestershire</p>
          </div>
          <div>
            <p className="font-bold text-2xl" style={{ color: NAVY }}>4.9★</p>
            <p className="text-gray-500 text-sm mt-0.5">Google Rating</p>
          </div>
          <div>
            <p className="font-bold text-2xl" style={{ color: NAVY }}>267</p>
            <p className="text-gray-500 text-sm mt-0.5">Five-Star Reviews</p>
          </div>
          <div>
            <p className="font-bold text-2xl" style={{ color: PINK }}>Gold</p>
            <p className="text-gray-500 text-sm mt-0.5">British Property Awards 2025</p>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: COPY + CTA ── */}
      <div className="py-20 px-6" style={{ background: '#F8F8F8' }}>
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: PINK }}>
            Free In-Person Valuation — No Obligation
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
            At Johnsons, we've spent over 20 years giving homeowners across Evesham, Pershore, Broadway and The Lenches the honest answer — backed by real sales data, not ambition. <span className="font-semibold" style={{ color: NAVY }}>Book your free in-person valuation in under 60 seconds.</span>
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

      {/* ── REVIEWS ── */}
      <div className="py-20 px-6" style={{ background: '#F8F8F8' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">

            {/* Left — overall rating */}
            <div className="flex flex-col items-center justify-center text-center md:w-48 flex-shrink-0">
              <p className="font-black text-xl uppercase tracking-widest text-gray-800 mb-2">Excellent</p>
              <div className="flex gap-0.5 mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-7 h-7" fill="#FBBC05" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-sm mb-3">Based on <span className="font-semibold text-gray-700">267 reviews</span></p>
              {/* Google logo */}
              <svg viewBox="0 0 74 24" className="w-16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
                <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
                <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.21-1.18 3.39-3.09 3.39-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.43v1zm-2.93 8.03c-1.76 0-3.09-1.5-3.09-3.52 0-2.05 1.33-3.52 3.09-3.52 1.74 0 3.09 1.49 3.09 3.54.01 2.03-1.35 3.5-3.09 3.5z" fill="#4285F4"/>
                <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
                <path d="M58.5 .24h2.51v17.57H58.5z" fill="#34A853"/>
                <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
              </svg>
            </div>

            {/* Right — review cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-sm text-gray-800">{r.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{r.date}</p>
                    </div>
                    {/* Google G icon */}
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="#FBBC05" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">"{r.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOOKING FORM ── */}
      <div id="book" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: PINK }}>
              Book Online
            </p>
            <h2 className="font-bold text-3xl md:text-4xl" style={{ color: NAVY }}>
              Book Your Free In-Person Valuation
            </h2>
            <p className="text-gray-500 mt-3 text-lg">We come to you. Takes less than 60 seconds to book. No commitment required.</p>
            <p className="text-gray-400 text-sm mt-2">Hundreds of homeowners across Evesham, Pershore, Broadway and The Lenches have started here.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src={BOOKING_URL}
              width="100%"
              height="700"
              frameBorder="0"
              style={{ display: 'block' }}
              title="Book a Free Valuation"
            />
          </div>
        </div>
      </div>

      {/* ── FEATURED PROPERTY ── */}
      <div className="py-20 px-6" style={{ background: '#F8F8F8' }}>
        <div className="max-w-5xl mx-auto">
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
                Featured Property
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

      {/* ── FOOTER ── */}
      <div className="py-16 px-6 text-white" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto">

          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
            {/* Logo */}
            <div>
              <a href="https://www.johnsons-property.co.uk" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-white.png" alt="Johnsons Property Consultants" style={{ height: '64px', width: 'auto', display: 'block', marginBottom: '8px' }} />
              </a>
              <div className="flex items-center gap-1">
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

          {/* Contact points */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 pt-10">

            {/* Direct contact */}
            <div className="flex flex-col gap-4">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Contact Us</p>
              <a href="tel:01386761515" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-white/60 transition-colors">
                  <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors text-sm font-medium">01386 761515</span>
              </a>
              <a href="mailto:evesham@johnsons-property.co.uk" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-white/60 transition-colors">
                  <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors text-sm font-medium">evesham@johnsons-property.co.uk</span>
              </a>
              <a href="/faq" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-white/60 transition-colors">
                  <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors text-sm font-medium">Frequently Asked Questions</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Follow Us</p>
              <div className="flex flex-col gap-3">
                <a href="https://www.johnsons-property.co.uk" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">johnsons-property.co.uk</a>
                <a href="https://www.instagram.com/johnsonsproperty/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Instagram</a>
                <a href="https://www.facebook.com/JohnsonsEvesham/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Facebook</a>
                <a href="https://x.com/JohnsonsEvesham" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">X / Twitter</a>
                <a href="https://www.linkedin.com/company/johnsons-property-consultants/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
              </div>
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
