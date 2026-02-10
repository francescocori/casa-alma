"use client";

import Image from "next/image";
import RevealWrapper from "@/components/RevealWrapper";

const STATS = [
  { value: "2", label: "Alloggi" },
  { value: "4.9", label: "Rating" },
  { value: "120+", label: "Ospiti" },
];

export default function About() {
  return (
    <section id="about" className=" py-28 px-6 lg:px-12">
      <div className="mx-auto   items-center justify-center flex">
        {/* Right — Text */}
        <div className="mx-auto text-center">
          <RevealWrapper delay={150}>
            <p className="text-[0.7rem] font-medium uppercase tracking-[4px] text-terracotta mx-auto">
              Chi Siamo
            </p>
          </RevealWrapper>

          <RevealWrapper delay={300}>
            <h2
              className="mt-4 mb-6 font-heading text-forest"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Una storia di passione
              <br />
              per la montagna
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={450}>
            <p className="max-w-lg text-base leading-relaxed text-carbon/80">
              Villa Alma nasce dal desiderio di condividere la bellezza e la
              tranquillità delle nostre montagne. Da generazioni la nostra
              famiglia vive e respira questi luoghi, e oggi apriamo le porte dei
              nostri due rifugi perché anche voi possiate vivere la magia di
              svegliarvi tra le vette, respirare aria pura e ritrovare il ritmo
              lento della natura.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-carbon/80">
              Ogni dettaglio dei nostri alloggi è stato curato con amore — dal
              legno antico delle travi al calore del camino che vi accoglierà
              dopo una giornata sulle piste o sui sentieri.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
