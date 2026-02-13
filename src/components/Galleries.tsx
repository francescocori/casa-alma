"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/RevealWrapper";

const MAX_VISIBLE = 7;

interface Property {
  name: string;
  guests: string;
  bookingUrl: string;
  images: { src: string; alt: string }[];
}

const PROPERTIES: Property[] = [
  {
    name: "Dimora di montagna",
    guests: "max 4 ospiti",
    bookingUrl:
      "https://www.airbnb.it/rooms/1600275293658777279?viralityEntryPoint=1&s=76&source_impression_id=p3_1770993729_P3rljZJo7M-JNsIa",
    images: [
      {
        src: "/images/Dimora in montagna/Immagine 4.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 1.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 2.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 3.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 5.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 6.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 7.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 8.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 9.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 10.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 13.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 14.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 15.jpeg",
        alt: "Dimora in montagna",
      },
      {
        src: "/images/Dimora in montagna/Immagine 16.jpeg",
        alt: "Dimora in montagna",
      },
    ],
  },
  {
    name: "La baita",
    guests: "max 4 ospiti",
    bookingUrl:
      "https://www.airbnb.it/rooms/894161522302137780?viralityEntryPoint=1&s=76&source_impression_id=p3_1770993836_P3mee542EleV3Omi",
    images: [
      { src: "/images/La baita/Immagine (1).jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 1.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 3.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 4.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 5.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 6.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 7.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 8.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 9.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 10.jpeg", alt: "La baita" },
      { src: "/images/La baita/Immagine 11.jpeg", alt: "La baita" },
    ],
  },
];

function ArrowButton({
  direction,
  onClick,
  disabled = false,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Foto precedenti" : "Foto successive"}
      className={`flex h-[55px] w-8 shrink-0 items-center justify-center rounded-[12px] transition-colors ${
        disabled
          ? "bg-forest/3 text-forest/15 cursor-default"
          : "bg-forest/5 text-forest/50 hover:bg-forest/10 hover:text-forest"
      }`}
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
  const touchStartX = useRef(0);

  const images = property.images;
  const needsArrows = images.length > MAX_VISIBLE;
  const visibleThumbs = needsArrows
    ? images.slice(thumbOffset, thumbOffset + MAX_VISIBLE)
    : images;

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
    <div className="rounded-[15px] bg-cream transition-all duration-300 overflow-hidden max-w-full ">
      {/* Header */}
      <div className="flex flex-col gap-3 px-4 md:px-8 pt-6 md:flex-row md:items-center md:justify-between">
        <h3 className="font-heading text-xl text-forest">{property.name}</h3>
        <div className="flex items-center gap-2">
          <a
            href={property.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-terracotta/10 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-widest text-terracotta transition-colors hover:bg-terracotta hover:text-white"
          >
            Prenota qui
          </a>
          <span className="rounded-[15px] bg-terracotta/10 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-terracotta">
            {property.guests}
          </span>
        </div>
      </div>

      {/* Main image */}
      <div
        className="group relative md:mx-6 mt-4 aspect-[16/10] overflow-hidden rounded-[20px]"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (dx < -40 && active < images.length - 1) goTo(active + 1);
          if (dx > 40 && active > 0) goTo(active - 1);
        }}
      >
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
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}
        {active < images.length - 1 && (
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Foto successiva"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="flex items-center gap-2 px-4 md:px-6 pt-4 pb-6">
        <ArrowButton
          direction="left"
          disabled={active === 0}
          onClick={() => goTo(Math.max(0, active - 1))}
        />

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

        <ArrowButton
          direction="right"
          disabled={active === images.length - 1}
          onClick={() => goTo(Math.min(images.length - 1, active + 1))}
        />
      </div>
    </div>
  );
}

export default function Galleries() {
  return (
    <section id="alloggi" className="bg-cream py-28 px-2  overflow-hidden">
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
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}
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
      <div className="mx-auto grid w-full gap-4 lg:gap-0 md:grid-cols-2">
        {PROPERTIES.map((property, i) => (
          <RevealWrapper key={property.name} delay={450 + i * 150}>
            <GalleryCard property={property} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
