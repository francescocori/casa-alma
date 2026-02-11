"use client";

import Image from "next/image";
import RevealWrapper from "@/components/RevealWrapper";

export default function BookingCTA() {
  return (
    <section className="relative bg-forest pt-0 pb-24 px-6 text-center text-warm-white rounded-[35px] mx-2 md:mx-6 overflow-hidden ">
      <div className="relative z-10 mx-auto max-w-3xl">
        <RevealWrapper>
          <Image
            src="/images/montagne2.svg"
            alt=""
            width={1200}
            height={400}
            aria-hidden="true"
            className="pointer-events-none mx-auto  mb-4 w-full max-w-4xl mt-10 object-contain"
          />
          <p className="text-[0.7rem] uppercase tracking-[4px] text-sage-light">
            Prenota il tuo soggiorno
          </p>
        </RevealWrapper>

        <RevealWrapper delay={150}>
          <h2
            className="mt-4 mb-4 font-heading text-warm-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Trova il tuo rifugio perfetto
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={300}>
          <p className="mx-auto mb-10 max-w-xl text-white/75">
            Che sia per un weekend sugli sci, una settimana di trekking o
            semplicemente per staccare dalla routine — Villa Alma vi aspetta a
            braccia aperte.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={450}>
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-sm border-2 border-terracotta bg-terracotta px-10 py-4 text-xs font-medium uppercase tracking-widest text-warm-white transition-all duration-300 hover:border-white hover:bg-transparent"
          >
            {/* Airbnb icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.703c-.292.603-.794 1.018-1.404 1.157-.384.088-.778.088-1.186-.01-1.156-.278-2.4-1.186-3.304-2.378-.904 1.192-2.148 2.1-3.304 2.378-.408.098-.802.098-1.186.01-.61-.139-1.112-.554-1.404-1.157-.465-.964-.327-2.203.396-3.508.425-.767 1.032-1.52 1.795-2.228-.084-.238-.16-.48-.218-.726-.396-1.68-.09-3.076.854-3.756.488-.35 1.09-.44 1.712-.26.614.18 1.198.59 1.7 1.154.11.122.214.25.316.384.102-.134.206-.262.316-.384.502-.564 1.086-.974 1.7-1.154.622-.18 1.224-.09 1.712.26.944.68 1.25 2.076.854 3.756-.058.246-.134.488-.218.726.763.708 1.37 1.461 1.795 2.228.723 1.305.861 2.544.396 3.508zm-1.073-2.976c-.378-.682-.922-1.37-1.604-2.012-.318.478-.674.94-1.064 1.38-.39.44-.804.848-1.236 1.218.808 1.014 1.81 1.778 2.718 2.002.262.064.502.058.716-.01.332-.084.6-.302.768-.64.266-.536.17-1.28-.298-1.938zm-5.738.586c.342-.302.672-.63.986-.984.314-.354.608-.726.88-1.112-.272-.386-.566-.758-.88-1.112-.314-.354-.644-.682-.986-.984-.342.302-.672.63-.986.984-.314.354-.608.726-.88 1.112.272.386.566.758.88 1.112.314.354.644.682.986.984zm-.924-5.472c-.398-.444-.806-.784-1.198-.966-.384-.18-.72-.204-1.004-.004-.528.38-.716 1.36-.396 2.718.044.186.098.372.158.558.61-.466 1.262-.876 1.936-1.218.178-.328.344-.66.504-.996v-.092zm1.848-.092c.16.336.326.668.504.996.674.342 1.326.752 1.936 1.218.06-.186.114-.372.158-.558.32-1.358.132-2.338-.396-2.718-.284-.2-.62-.176-1.004.004-.392.182-.8.522-1.198.966v.092zm-5.228 5.482c-.468.658-.564 1.402-.298 1.938.168.338.436.556.768.64.214.068.454.074.716.01.908-.224 1.91-.988 2.718-2.002-.432-.37-.846-.778-1.236-1.218-.39-.44-.746-.902-1.064-1.38-.682.642-1.226 1.33-1.604 2.012z" />
            </svg>
            Prenota su Airbnb
          </a>
        </RevealWrapper>
      </div>
    </section>
  );
}
