'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const FOOTER_COPYRIGHT = `Fan-made website. Not affiliated with Bulwark Studios, Kasedo Games or Games Workshop. All game names, trademarks, artwork and intellectual properties belong to their respective owners. All content and tools are created for reference and entertainment purposes only. If you have copyright concerns, please contact: support@nanobananas.me. We will remove relevant content promptly.`;

export function Footer() {
  const [year, setYear] = useState<number>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto border-t border-[rgba(230,194,0,0.2)] bg-[#0A1F19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Nav Links */}
        <div className="flex flex-wrap gap-6 mb-6">
          <Link href="/" className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors">
            Home
          </Link>
          <Link href="/guides" className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors">
            Guides
          </Link>
          <Link href="/tools" className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors">
            Tools
          </Link>
          <Link href="/about" className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors">
            About
          </Link>
          <span className="text-[#E6C200]/20">|</span>
          <Link href="/privacy" className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors">
            Terms of Service
          </Link>
        </div>

        {/* Copyright Notice */}
        <p className="text-xs text-[#B0B0B0]/70 leading-relaxed max-w-4xl">
          {FOOTER_COPYRIGHT}
        </p>

        {/* E-E-A-T Short Disclaimer */}
        <p className="mt-2 text-xs text-[#B0B0B0]/50 leading-relaxed">
          Unofficial fan-made site. Not affiliated with Games Workshop, Bulwark Studios, or Kasedo Games. Contact:{' '}
          <a href="mailto:support@nanobananas.me" className="underline hover:text-[#E6C200] transition-colors">
            support@nanobananas.me
          </a>
        </p>

        {/* Site Credit */}
        <p className="mt-3 text-xs text-[#B0B0B0]/50">
          &copy; {year} mechanicus2.nanobananas.me
        </p>
      </div>
    </footer>
  );
}
