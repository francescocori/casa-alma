"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "Chi Siamo", href: "#about" },
  { label: "Alloggi", href: "#alloggi" },
  { label: "Attività", href: "#attivita" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Contatti", href: "#dove" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      aria-label="Navigazione principale"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        menuOpen
          ? "bg-transparent"
          : scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
      }`}
    >
      <div className="relative z-[60] mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          aria-label="Torna in cima — Villa Alma"
          className={`font-heading text-lg tracking-[0.25em] transition-colors duration-500 ${
            menuOpen ? "text-white" : scrolled ? "text-carbon" : "text-white"
          }`}
        >
          VILLA ALMA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`group relative font-body text-xs uppercase tracking-widest transition-colors duration-500 ${
                  scrolled ? "text-carbon" : "text-white"
                }`}
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative flex md:hidden flex-col justify-center items-center w-8 h-8 gap-[5px]"
        >
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-500 ${
              menuOpen
                ? "translate-y-[7px] rotate-45 bg-white"
                : scrolled
                  ? "bg-carbon"
                  : "bg-white"
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-500 ${
              menuOpen ? "opacity-0" : scrolled ? "bg-carbon" : "bg-white"
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-500 ${
              menuOpen
                ? "-translate-y-[7px] -rotate-45 bg-white"
                : scrolled
                  ? "bg-carbon"
                  : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-500 md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 bg-forest transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="font-body text-sm uppercase tracking-widest text-white transition-colors duration-300 hover:text-sage-light"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
