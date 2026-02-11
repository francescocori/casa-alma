"use client";

import { useState } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/RevealWrapper";

const MAX_VISIBLE = 7;

interface Property {
  name: string;
  guests: string;
  images: { src: string; alt: string }[];
}

const PROPERTIES: Property[] = [
  {
    name: "Alma Uno",
    guests: "4 ospiti",
    images: [
      {
        src: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=960&q=80",
        alt: "Soggiorno accogliente con camino e divano in pelle",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=960&q=80",
        alt: "Camera da letto con vista montagna",
      },
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=960&q=80",
        alt: "Cucina in legno con piano cottura moderno",
      },
      {
        src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=960&q=80",
        alt: "Bagno con finiture in pietra naturale",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=960&q=80",
        alt: "Vista panoramica delle montagne dal balcone",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=960&q=80",
        alt: "Vista panoramica delle montagne dal balcone",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=960&q=80",
        alt: "Vista panoramica delle montagne dal balcone",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=960&q=80",
        alt: "Vista panoramica delle montagne dal balcone",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=960&q=80",
        alt: "Vista panoramica delle montagne dal balcone",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=960&q=80",
        alt: "Vista panoramica delle montagne dal balcone",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=960&q=80",
        alt: "Vista panoramica delle montagne dal balcone",
      },
    ],
  },
  {
    name: "Alma Due",
    guests: "6 ospiti",
    images: [
      {
        src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=960&q=80",
        alt: "Ampio soggiorno con travi a vista e camino",
      },
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=960&q=80",
        alt: "Camera matrimoniale con biancheria in lino",
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=960&q=80",
        alt: "Cucina rustica con isola centrale",
      },
      {
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=960&q=80",
        alt: "Bagno con vasca e vista sulla valle",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=960&q=80",
        alt: "Terrazza panoramica con sedie in legno",
      },
    ],
  },
];

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Foto precedenti" : "Foto successive"}
      className="flex h-[55px] w-8 shrink-0 items-center justify-center rounded-[12px] bg-forest/5 text-forest/50 transition-colors hover:bg-forest/10 hover:text-forest"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "left" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 6 15 12 9 18" />
        )}
      </svg>
    </button>
  );
}

function GalleryCard({ property }: { property: Property }) {
  const [active, setActive] = useState(0);
  const [thumbOffset, setThumbOffset] = useState(0);

  const images = property.images;
  const needsArrows = images.length > MAX_VISIBLE;
  const visibleThumbs = needsArrows
    ? images.slice(thumbOffset, thumbOffset + MAX_VISIBLE)
    : images;

  const canScrollLeft = thumbOffset > 0;
  const canScrollRight = thumbOffset + MAX_VISIBLE < images.length;

  function goTo(index: number) {
    setActive(index);
    // Keep the active thumbnail visible in the strip
    if (index < thumbOffset) {
      setThumbOffset(index);
    } else if (index >= thumbOffset + MAX_VISIBLE) {
      setThumbOffset(index - MAX_VISIBLE + 1);
    }
  }

  return (
    <div className="rounded-[15px] bg-cream transition-all duration-300 overflow-hidden max-w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-8 pt-6">
        <h3 className="font-heading text-xl text-forest">{property.name}</h3>
        <span className="rounded-[15px] bg-terracotta/10 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-terracotta">
          {property.guests}
        </span>
      </div>

      {/* Main image */}
      <div className="group relative mx-4 md:mx-6 mt-4 aspect-[16/10] overflow-hidden rounded-[20px]">
        {images.map((img, i) => (
          <Image
            key={img.src + i}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            className={`object-cover transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Prev / Next overlays */}
        {active > 0 && (
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Foto precedente"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
        )}
        {active < images.length - 1 && (
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Foto successiva"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="flex items-center gap-2 px-4 md:px-6 pt-4 pb-6">
        {needsArrows && canScrollLeft && (
          <ArrowButton
            direction="left"
            onClick={() => goTo(Math.max(0, active - 1))}
          />
        )}

        <div className="flex flex-1 gap-2 justify-center">
          {visibleThumbs.map((img, vi) => {
            const realIndex = needsArrows ? thumbOffset + vi : vi;
            return (
              <button
                key={img.src + realIndex}
                type="button"
                onClick={() => goTo(realIndex)}
                aria-label={`Mostra foto ${realIndex + 1}: ${img.alt}`}
                className={`relative h-[55px] flex-1 min-w-0 overflow-hidden rounded-[12px] transition-all duration-300 ${
                  realIndex === active
                    ? "ring-2 ring-terracotta opacity-100"
                    : "cursor-pointer opacity-60 hover:opacity-85"
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="70px"
                  loading="lazy"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>

        {needsArrows && canScrollRight && (
          <ArrowButton
            direction="right"
            onClick={() => goTo(Math.min(images.length - 1, active + 1))}
          />
        )}
      </div>
    </div>
  );
}

export default function Galleries() {
  return (
    <section
      id="alloggi"
      className="bg-cream py-28 px-6 lg:px-12 overflow-hidden"
    >
      {/* Header */}
      <div className="mx-auto mb-16 max-w-xl text-center">
        <RevealWrapper>
          <p className="text-[0.7rem] font-medium uppercase tracking-[4px] text-terracotta">
            I Nostri Alloggi
          </p>
        </RevealWrapper>
        <RevealWrapper delay={150}>
          <h2
            className="mt-4 mb-4 font-heading text-forest"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Due rifugi, un&apos;unica magia
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={300}>
          <p className="text-carbon/70">
            Scoprite i nostri due alloggi, ognuno con il suo carattere unico ma
            con lo stesso calore di casa.
          </p>
        </RevealWrapper>
      </div>

      {/* Gallery cards */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {PROPERTIES.map((property, i) => (
          <RevealWrapper key={property.name} delay={450 + i * 150}>
            <GalleryCard property={property} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
