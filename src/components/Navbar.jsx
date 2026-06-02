'use client';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#overview',   label: 'Overview'    },
  { href: '#topics',     label: 'Topics'      },
  { href: '#speakers',   label: 'Speakers'    },
  { href: '#schedule',   label: 'Schedule'    },
  { href: '#organizers', label: 'Organizers'  },
  { href: '#cfp',        label: 'Participate' },
  { href: '#venue',      label: 'Venue'       },
  { href: '#contact',    label: 'Contact'     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-[#00d4ff]/10 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[58px]">
        <a href="#home" className="font-mono text-[12px] text-[#00d4ff] tracking-widest hover:opacity-80 transition-opacity">
          QPC<span className="text-muted">://</span>UbiComp26
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="font-mono text-[11px] text-muted hover:text-[#00d4ff] tracking-[0.04em] px-3 py-2 transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        <span className="hidden md:inline-block font-mono text-[10px] bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-3 py-1 rounded-full">
          Shanghai · Oct 11-12 2026
        </span>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span className={`block w-5 h-px bg-muted transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-muted transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-muted transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#061428]/95 backdrop-blur-md border-b border-[#00d4ff]/10 px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="font-mono text-[12px] text-muted hover:text-[#00d4ff] tracking-[0.04em] py-2 border-b border-white/5 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <span className="inline-block mt-4 font-mono text-[10px] bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-3 py-1 rounded-full">
            Shanghai · Oct  11-12 2026
          </span>
        </div>
      )}
    </nav>
  );
}