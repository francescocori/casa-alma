// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// const BLUR_DATA_URL =
//   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiPjxyZWN0IGZpbGw9IiMyQzNFMkQiIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiLz48L3N2Zz4=";

// export default function Hero() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const id = requestAnimationFrame(() => setVisible(true));
//     return () => cancelAnimationFrame(id);
//   }, []);

//   return (
//     <section
//       id="top"
//       className="relative flex h-screen min-h-162.5 items-center justify-center overflow-hidden bg-forest max-md:min-h-svh"
//     >
//       {/* Background image */}
//       <Image
//         src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
//         alt="Paesaggio alpino con montagne innevate"
//         fill
//         priority
//         sizes="100vw"
//         quality={85}
//         placeholder="blur"
//         blurDataURL={BLUR_DATA_URL}
//         className="animate-hero-zoom object-cover"
//       />

//       {/* Gradient overlay */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-linear-to-b from-forest/30 via-forest/15 to-forest/40"
//       />

//       {/* Content */}
//       <div
//         className={`relative z-10 flex flex-col items-center text-center text-white transition-all duration-1200 ease-out ${
//           visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         }`}
//       >
//         <p className="text-xs uppercase tracking-[5px] opacity-85">
//           Rifugio in Montagna
//         </p>

//         <h1
//           className="mt-4 font-heading tracking-[6px] max-md:tracking-[3px]"
//           style={{
//             fontSize: "clamp(3rem, 8vw, 7rem)",
//             textShadow: "0 2px 30px rgba(0,0,0,0.3)",
//           }}
//         >
//           Villa Alma
//         </h1>

//         <p className="mt-4 text-lg font-light tracking-wider opacity-90">
//           Dove la montagna diventa casa
//         </p>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-10 left-1/2 z-10 flex animate-hero-bounce flex-col items-center gap-2">
//         <span className="text-[0.65rem] uppercase tracking-[3px] text-white/80">
//           Scopri
//         </span>
//         <span className="block h-10 w-px bg-linear-to-b from-white to-transparent" />
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiPjxyZWN0IGZpbGw9IiMyQzNFMkQiIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiLz48L3N2Zz4=";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-screen min-h-162.5 items-center justify-center overflow-hidden bg-forest max-md:min-h-svh"
    >
      {/* Background image with Ken Burns zoom-out */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/heroMountain.jpeg"
          // src="/images/montagne4.jpeg"
          alt="Paesaggio alpino con montagne innevate"
          fill
          priority
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          onLoad={() => setImageLoaded(true)}
          className={`object-cover transition-none ${
            imageLoaded ? "animate-hero-zoom-out" : "scale-135"
          }`}
        />
      </div>

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-forest/30 via-forest/15 to-forest/40"
      />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center text-center text-white transition-all duration-1200 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="text-xs uppercase tracking-[5px] opacity-85">
          Rifugio in Montagna
        </p>

        <h1
          className="mt-4 font-heading tracking-[6px] max-md:tracking-[3px]"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            textShadow: "0 2px 30px rgba(0,0,0,0.3)",
          }}
        >
          Villa Alma
        </h1>

        <p className="mt-4 text-lg font-light tracking-wider opacity-90">
          Dove la montagna diventa casa
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex animate-hero-bounce flex-col items-center gap-2">
        <span className="text-[0.65rem] uppercase tracking-[3px] text-white/80">
          Scopri
        </span>
        <span className="block h-10 w-px bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
