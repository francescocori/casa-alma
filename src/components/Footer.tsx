const EXPLORE_LINKS = [
  { label: "Chi Siamo", href: "#about" },
  { label: "Alloggi", href: "#alloggi" },
  { label: "Attività", href: "#attivita" },
  { label: "Recensioni", href: "#recensioni" },
];

const CONTACT_LINKS = [
  { label: "villaalma2026@gmail.com", href: "mailto:villaalma2026@gmail.com" },
  { label: "+39 389 019 9168", href: "tel:+393890199168" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/villaalmasaletto/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61587326968726" },
  { label: "Airbnb", href: "https://www.airbnb.it/rooms/1600275293658777279" },
];

export default function Footer() {
  return (
    <footer className="bg-forest pt-16 pb-8 px-6 text-warm-white lg:px-12">
      {/* Main content */}
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <p className="font-heading text-3xl tracking-wider">Villa Alma</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Due rifugi nel cuore delle montagne, dove la natura vi accoglie e il
            tempo rallenta.
          </p>
        </div>

        {/* Esplora */}
        <div>
          <p className="mb-5 text-[0.75rem] uppercase tracking-[3px] text-white/50">
            Esplora
          </p>
          <nav aria-label="Link footer esplora">
            {EXPLORE_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="mb-3 block text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contatti */}
        <div>
          <p className="mb-5 text-[0.75rem] uppercase tracking-[3px] text-white/50">
            Contatti
          </p>
          <nav aria-label="Link footer contatti">
            {CONTACT_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 block text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <p className="mb-5 text-[0.75rem] uppercase tracking-[3px] text-white/50">
            Social
          </p>
          <nav aria-label="Link footer social">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 block text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-2 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:justify-between">
        <p>&copy; 2026 Villa Alma. Tutti i diritti riservati.</p>
        <p>Fatto con ❤️ in montagna</p>
      </div>
    </footer>
  );
}
