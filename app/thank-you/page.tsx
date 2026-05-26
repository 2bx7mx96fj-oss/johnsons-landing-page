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
        style={{ background: NAVY }}
      >
        {/* Tick icon */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-8 text-5xl"
          style={{ background: PINK }}
        >
          ✓
        </div>

        <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">
          Booking Confirmed!
        </h1>

        <p className="text-white/70 text-lg max-w-md mb-10">
          Thank you for booking your free valuation with Johnsons. A member of our team will be in touch shortly to confirm your appointment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/"
            className="px-8 py-4 rounded-full font-semibold text-white text-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all"
          >
            ← Back to Home
          </a>
          <a
            href="tel:01386761515"
            className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all hover:scale-105"
            style={{ background: PINK }}
          >
            📞 01386 761515
          </a>
        </div>

        <p className="text-white/40 text-sm mt-12">
          Johnsons Property Consultants · Estate Agents &amp; Letting Agents · Evesham
        </p>
      </main>
    </>
  );
}
