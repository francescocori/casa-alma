"use client";

import { useState } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/RevealWrapper";

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

function GalleryCard({ property }: { property: Property }) {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-md bg-cream  transition-all duration-300  ">
      {/* Header */}
      <div className="flex items-center justify-between px-8 pt-6">
        <h3 className="font-heading text-xl text-forest">{property.name}</h3>
        <span className="rounded-sm bg-terracotta/10 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-terracotta">
          {property.guests}
        </span>
      </div>

      {/* Main image */}
      <div className="relative mx-6 mt-4 aspect-[16/10] overflow-hidden rounded-sm">
        {property.images.map((img, i) => (
          <Image
            key={img.src}
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
      </div>

      {/* Thumbnail strip */}
      <div className="gallery-thumbs flex gap-2 overflow-x-auto px-6 pt-4 pb-6 snap-x">
        {property.images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Mostra foto ${i + 1}: ${img.alt}`}
            className={`relative h-[55px] w-[70px] shrink-0 snap-start overflow-hidden rounded-sm transition-all duration-300 ${
              i === active
                ? "border-2 border-terracotta opacity-100"
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
        ))}
      </div>
    </div>
  );
}

export default function Galleries() {
  return (
    <section id="alloggi" className="bg-cream py-28 px-6 lg:px-12">
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
