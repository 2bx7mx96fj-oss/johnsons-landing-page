'use client';

import { useEffect, useState } from 'react';

const NAVY = '#1B2A5E';

export default function NavBar() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Visible over the hero video, fades out as they leave it
      const heroHeight = window.innerHeight;
      const fadeStart = heroHeight * 0.5;
      const fadeEnd = heroHeight * 1.2;
      const scrollY = window.scrollY;

      if (scrollY < fadeStart) {
        setOpacity(1);
      } else if (scrollY > fadeEnd) {
        setOpacity(0);
      } else {
        setOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'transparent',
        padding: '10px 32px',
        display: 'flex',
        alignItems: 'center',
        opacity,
        transition: 'opacity 400ms ease',
        pointerEvents: opacity === 0 ? 'none' : 'auto',
      }}
    >
      <a
        href="https://www.johnsons-property.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', lineHeight: 0 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt="Johnsons Property Consultants"
          style={{ height: '80px', width: 'auto', display: 'block' }}
        />
      </a>
    </nav>
  );
}
