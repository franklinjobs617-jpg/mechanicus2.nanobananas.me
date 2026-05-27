'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Games', href: '/games' },
  { label: 'Guides', href: '/guides' },
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(230,194,0,0.2)] bg-[#0F2620]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[rgba(230,194,0,0.4)] bg-[#162B24] text-[#E6C200] font-bold text-lg transition-colors group-hover:border-[#E6C200]">
            N
          </div>
          <span className="hidden sm:inline text-[#F0F0F0] font-semibold text-lg tracking-wide">
            Nanobananas
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-[rgba(230,194,0,0.15)] text-[#E6C200]'
                    : 'text-[#B0B0B0] hover:text-[#F0F0F0] hover:bg-[rgba(230,194,0,0.08)]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-[rgba(230,194,0,0.08)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              'block w-5 h-0.5 bg-[#F0F0F0] transition-all duration-200',
              mobileOpen ? 'rotate-45 translate-y-[3px]' : ''
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 bg-[#F0F0F0] mt-1 transition-all duration-200',
              mobileOpen ? 'opacity-0' : ''
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 bg-[#F0F0F0] mt-1 transition-all duration-200',
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-[rgba(230,194,0,0.2)] bg-[#0F2620]">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block px-6 py-3 text-sm font-medium transition-colors border-b border-[rgba(230,194,0,0.08)]',
                  isActive
                    ? 'bg-[rgba(230,194,0,0.15)] text-[#E6C200]'
                    : 'text-[#B0B0B0] hover:text-[#F0F0F0] hover:bg-[rgba(230,194,0,0.08)]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
