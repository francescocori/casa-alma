"use client";

import Image from "next/image";
import RevealWrapper from "@/components/RevealWrapper";
import type { ReactNode } from "react";

interface Activity {
  name: string;
  description: string;
  src: string;
  alt: string;
  icon: ReactNode;
}

const ICON_PROPS = {
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "text-sage-light",
  "aria-hidden": true as const,
};

const ACTIVITIES: Activity[] = [
  {
    name: "Sci & Snowboard",
    description:
      "Piste per tutti i livelli a pochi minuti di auto. Discese mozzafiato con vista sulle Alpi.",
    src: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=960&q=80",
    alt: "Sciatore in discesa su pista innevata con montagne sullo sfondo",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 20 L12 4 L20 20" />
        <path d="M8 14 L12 8 L16 14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    name: "Trekking",
    description:
      "Sentieri panoramici immersi nella natura incontaminata, adatti a famiglie e avventurieri.",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=960&q=80",
    alt: "Escursionista su sentiero panoramico in montagna",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 20 L9 6 L13 14 L17 8 L21 20" />
        <line x1="1" y1="20" x2="23" y2="20" />
      </svg>
    ),
  },
  {
    name: "Cascate",
    description:
      "Visitate le spettacolari cascate nascoste tra le valli — un'esperienza indimenticabile.",
    src: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8b6f?w=960&q=80",
    alt: "Cascata spettacolare che scende tra le rocce della montagna",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 2 C12 2 8 6 8 10 C8 12.2 9.8 14 12 14 C14.2 14 16 12.2 16 10 C16 6 12 2 12 2Z" />
        <path d="M7 15 L7 22" />
        <path d="M12 16 L12 22" />
        <path d="M17 15 L17 22" />
      </svg>
    ),
  },
];

export default function Activities() {
  return (
    <section id="attivita" className="bg-cream py-28 px-6 lg:px-12">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-xl text-center">
        <RevealWrapper>
          <p className="text-[0.7rem] font-medium uppercase tracking-[4px] text-terracotta">
            Esperienze
          </p>
        </RevealWrapper>
        <RevealWrapper delay={150}>
          <h2
            className="mt-4 mb-4 font-heading text-forest"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Vivi la montagna
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={300}>
          <p className="text-carbon/70">
            Ogni stagione offre emozioni uniche. Dalle piste innevate ai
            sentieri fioriti, c&apos;è sempre un buon motivo per visitare Villa
            Alma.
          </p>
        </RevealWrapper>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {ACTIVITIES.map((activity, i) => (
          <RevealWrapper key={activity.name} delay={i * 150}>
            <div className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-md md:aspect-[3/4]">
              <Image
                src={activity.src}
                alt={activity.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />

              {/* Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-forest/85 via-forest/30 via-[60%] to-forest/10 transition-opacity duration-500 group-hover:from-forest/90"
              />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                {activity.icon}
                <h3 className="mt-3 font-heading text-2xl text-warm-white">
                  {activity.name}
                </h3>
                <p className="max-h-24 text-sm leading-relaxed text-white/70 opacity-100 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100">
                  {activity.description}
                </p>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
