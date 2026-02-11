"use client";

import RevealWrapper from "@/components/RevealWrapper";

interface Review {
  name: string;
  date: string;
  quote: string;
}

const REVIEWS: Review[] = [
  {
    name: "Marco R.",
    date: "Gennaio 2026",
    quote:
      "Un posto magico! La villa era calda e accogliente, la vista sulle montagne toglie il fiato. Ci torneremo sicuramente.",
  },
  {
    name: "Sara & Luca",
    date: "Dicembre 2025",
    quote:
      "Perfetto per il nostro weekend sugli sci! Le piste sono vicinissime e tornare in un alloggio così curato è stato il top.",
  },
  {
    name: "Giulia P.",
    date: "Ottobre 2025",
    quote:
      "L'escursione alle cascate consigliata dai proprietari è stata incredibile. Ospitalità vera, come a villa di amici.",
  },
  {
    name: "Giulia P.",
    date: "Ottobre 2025",
    quote:
      "L'escursione alle cascate consigliata dai proprietari è stata incredibile. Ospitalità vera, come a villa di amici.",
  },
  {
    name: "Giulia P.",
    date: "Ottobre 2025",
    quote:
      "L'escursione alle cascate consigliata dai proprietari è stata incredibile. Ospitalità vera, come a villa di amici.",
  },
  {
    name: "Giulia P.",
    date: "Ottobre 2025",
    quote:
      "L'escursione alle cascate consigliata dai proprietari è stata incredibile. Ospitalità vera, come a villa di amici.",
  },
];

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-terracotta"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="recensioni" className="bg-cream py-28 px-6 lg:px-12">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-xl text-center">
        <RevealWrapper>
          <p className="text-[0.7rem] font-medium uppercase tracking-[4px] text-terracotta">
            Recensioni
          </p>
        </RevealWrapper>
        <RevealWrapper delay={150}>
          <h2
            className="mt-4 font-heading text-forest"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Cosa dicono i nostri ospiti
          </h2>
        </RevealWrapper>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-7xl flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:pb-0">
        {REVIEWS.map((review, i) => (
          <RevealWrapper key={i} delay={i * 150}>
            <div className="w-[85vw] shrink-0 snap-center md:w-auto rounded-[20px] bg-cream p-10 shadow-sm transition-transform duration-300 hover:-translate-y-1 border-1 border-forest">
              {/* Stars */}
              <div className="mb-5 flex gap-1" aria-label="5 stelle su 5">
                {Array.from({ length: 5 }, (_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-base italic leading-relaxed text-carbon/80">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-sage font-heading text-warm-white">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="mt-0.5 text-xs text-carbon/50">{review.date}</p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* Scroll hint — mobile only */}
      <div className="mt-4 flex items-center justify-center gap-2 text-carbon/40 md:hidden">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className="text-[0.65rem] uppercase tracking-[3px]">Scorri</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </div>
    </section>
  );
}
