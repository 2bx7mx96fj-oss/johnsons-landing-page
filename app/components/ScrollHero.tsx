'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetScaleRef = useRef(1.2);
  const targetYRef = useRef(3);
  const currentScaleRef = useRef(1.2);
  const currentYRef = useRef(3);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setVisible(true), 50);

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const { top, height } = container.getBoundingClientRect();
      const scrolled = -top;
      const scrollable = height - window.innerHeight;
      const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);
      targetScaleRef.current = 1.2 - progress * 0.2;
      targetYRef.current = 3 - progress * 3;
    };

    const SMOOTHING = 0.07;
    const tick = () => {
      const image = imageRef.current;
      if (image) {
        currentScaleRef.current += (targetScaleRef.current - currentScaleRef.current) * SMOOTHING;
        currentYRef.current += (targetYRef.current - currentYRef.current) * SMOOTHING;
        image.style.transform = `scale(${currentScaleRef.current}) translateY(${currentYRef.current}%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '300vh' }}>
      <div className="sticky top-0 w-screen h-screen overflow-hidden">

        {/* Video — drone pull-back */}
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full"
          style={{ transformOrigin: 'center center', willChange: 'transform', opacity: visible ? 1 : 0, transition: 'opacity 600ms ease-in' }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%',
              WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden',
              transform: 'translateZ(0)', display: 'block',
              filter: 'contrast(1.12) saturate(1.2) brightness(1.0)',
            }}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 pointer-events-none" />

        {/* Hero content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 800ms ease-in 200ms' }}
        >
          {/* Award badge */}
          <div className="mb-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-yellow-400/40 rounded-full px-5 py-2.5">
            <svg className="w-4 h-4 flex-shrink-0" fill="#FBBC05" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-yellow-300 text-xs font-semibold tracking-widest uppercase">British Property Awards 2025 — Gold Winner</span>
            <svg className="w-4 h-4 flex-shrink-0" fill="#FBBC05" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          {/* Main headline */}
          <h1 className="text-white font-bold tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1, textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Your Next Chapter<br />Starts With One Number
          </h1>

          {/* Subheading */}
          <p className="text-white/80 mb-10 max-w-xl" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            Find out what your home is really worth — not what an agent thinks you want to hear.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://street.co.uk/beta/platform/book-online/12c195c9-6dcc-45ed-adf9-1c5d7d4fd3c7/valuation/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'conversion', { send_to: 'AW-1018725426' });
                  (window as any).gtag('event', 'click', { event_category: 'CTA', event_label: 'Book Valuation Hero' });
                }
              }}
              className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-2xl"
              style={{ background: '#E0006B', boxShadow: '0 4px 24px rgba(224,0,107,0.4)' }}
            >
              Get a Free Valuation
            </a>
            <a
              href="tel:01386761515"
              className="px-8 py-4 rounded-full font-semibold text-white text-lg border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              01386 761515
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase animate-bounce">
          Scroll
        </div>
      </div>
    </div>
  );
}
