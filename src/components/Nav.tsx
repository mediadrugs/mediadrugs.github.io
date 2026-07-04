"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cyber-black/90 backdrop-blur-md border-b border-cyber-border">
      {/* top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Mediadrugs home"
          >
            <span className="font-orbitron text-xl font-black tracking-widest neon-text-cyan group-hover:animate-glow-pulse transition-all">
              MEDIA
            </span>
            <span className="font-orbitron text-xl font-black tracking-widest neon-text-magenta group-hover:animate-glow-pulse transition-all">
              DRUGS
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      relative px-4 py-2 font-mono-tech text-sm tracking-widest uppercase transition-all duration-300
                      ${
                        active
                          ? "neon-text-cyan"
                          : "text-gray-400 hover:text-neon-cyan hover:neon-text-cyan"
                      }
                    `}
                  >
                    {active && (
                      <span
                        className="absolute inset-0 rounded border border-neon-cyan/30 bg-neon-cyan/5"
                        aria-hidden="true"
                      />
                    )}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-neon-cyan transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block w-6 h-px bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-px bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-px bg-current transition-all" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden py-4 border-t border-cyber-border space-y-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`
                      block px-4 py-2 font-mono-tech text-sm tracking-widest uppercase transition-colors
                      ${active ? "neon-text-cyan" : "text-gray-400 hover:text-neon-cyan"}
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
