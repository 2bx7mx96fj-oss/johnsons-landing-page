'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const NAVY = '#1B2A5E';
const PINK = '#E0006B';
// TODO: Replace CONVERSION_LABEL with your real label from Google Ads
const CONVERSION_LABEL = 'REPLACE_WITH_YOUR_LABEL';

export default function ThankYou() {
  useEffect(() => {
    // Fire Google Ads conversion event on page load
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: `AW-1018725426/${CONVERSION_LABEL}`,
      });
    }
  }, []);

  return (
    <>
      {/* Conversion fallback for non-JS environments */}
      <Script id="conversion-event" strategy="afterInteractive">
        {`gtag('event', 'conversion', { send_to: 'AW-1018725426/${CONVERSION_LABEL}' });`}
      </Script>

      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{ background: NAVY, fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >

        {/* Top label */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: PINK }}>
          Booking Confirmed
        </p>

        {/* Headline */}
        <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6 max-w-xl">
          Your Next Chapter Starts Here
        </h1>

        {/* Subtext */}
        <p className="text-white/70 text-lg max-w-md mb-4 leading-relaxed">
          Thank you for booking your free valuation. A member of our team will be in touch shortly to confirm your appointment.
        </p>
        <p className="text-white/50 text-base max-w-md mb-12">
          While you wait — explore our latest properties and see what your next home could look like.
        </p>

        {/* Divider */}
        <div className="w-16 h-px mb-12" style={{ background: PINK }} />

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="https://www.johnsons-property.co.uk/properties-for-sale"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-bold text-white text-base transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: PINK, boxShadow: '0 4px 24px rgba(224,0,107,0.3)' }}
          >
            Find Your Dream Home →
          </a>
          <a
            href="https://www.johnsons-property.co.uk/properties-sold"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-white text-base border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
          >
            See Our Latest Sales
          </a>
        </div>

        {/* Phone */}
        <a
          href="tel:01386761515"
          className="text-white/50 text-sm hover:text-white/80 transition-colors mb-10"
        >
          Questions? Call us on 01386 761515
        </a>

        {/* Footer note */}
        <p className="text-white/25 text-xs">
          Johnsons Property Consultants · Estate Agents &amp; Letting Agents · Evesham, Worcestershire
        </p>

      </main>
    </>
  );
}
