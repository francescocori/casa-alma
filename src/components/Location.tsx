"use client";

import RevealWrapper from "@/components/RevealWrapper";
import type { ReactNode } from "react";

const ICON_PROPS = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "text-terracotta shrink-0 mt-1",
  "aria-hidden": true as const,
};

interface Detail {
  icon: ReactNode;
  title: string;
  description: string;
}

const DETAILS: Detail[] = [
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Indirizzo",
    description: "Frazione Saletto 33, Chiusaforte (Udine) 33010 Italia",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Come Arrivare",
    description: "A 10 min da Sella Nevea — parcheggio gratuito disponibile",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: "Contatti",
    description: "+39 389 019 9168 — villaalma2026@gmail.com",
  },
];

export default function Location() {
  return (
    <section id="dove" className="bg-cream py-28 px-6 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-2">
        {/* Left — Info */}
        <div>
          <RevealWrapper>
            <p className="text-[0.7rem] font-medium uppercase tracking-[4px] text-terracotta">
              Dove Trovarci
            </p>
          </RevealWrapper>

          <RevealWrapper delay={150}>
            <h2
              className="mt-4 mb-4 font-heading text-forest"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}
            >
              Raggiungerci è
              <br />
              parte del viaggio
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={300}>
            <p className="max-w-lg text-base leading-relaxed text-carbon/80">
              Immersi nel cuore delle Alpi, i nostri rifugi sono facilmente
              raggiungibili ma sufficientemente lontani dal caos per ritrovare
              la pace.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={450}>
            <div className="mt-8 flex flex-col gap-6">
              {DETAILS.map((detail) => (
                <div key={detail.title} className="flex gap-4">
                  {detail.icon}
                  <div>
                    <p className="font-heading text-base text-forest">
                      {detail.title}
                    </p>
                    <p className="text-sm text-carbon/70">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* Right — Map */}
        <RevealWrapper delay={300} direction="left">
          <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-[20px]">
            <iframe
              src="https://maps.google.com/maps?q=46.4035703,13.3763008&z=12&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione Villa Alma su Google Maps"
            />
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
