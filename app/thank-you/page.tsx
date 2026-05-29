'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const NAVY = '#1B2A5E';
const PINK = '#E0006B';
// TODO: Replace CONVERSION_LABEL with your real label from Google Ads
const CONVERSION_LABEL = 'Z-iMCIy7z7UcELKI4uUD';

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
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://johnsons-property.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-bold text-white text-base transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: PINK, boxShadow: '0 4px 24px rgba(224,0,107,0.3)' }}
          >
            Find Your Dream Home →
          </a>
        </div>

        {/* Socials */}
        <p className="text-white/40 text-sm uppercase tracking-widest mb-6">Follow us</p>
        <div className="flex items-center gap-6 mb-16">
          {/* Instagram */}
          <a href="https://www.instagram.com/johnsonsproperty/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/JohnsonsEvesham/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/johnsons-property-consultants/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {/* X / Twitter */}
          <a href="https://x.com/JohnsonsEvesham" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
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
