"use client";

import { useReveal } from "@/lib/useReveal";
import type { ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const TRANSFORMS = {
  up: "translate-y-[30px]",
  left: "translate-x-[30px]",
  right: "-translate-x-[30px]",
} as const;

export default function RevealWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealWrapperProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${TRANSFORMS[direction]} opacity-0`
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
