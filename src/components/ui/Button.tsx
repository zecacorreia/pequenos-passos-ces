"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "light";
  external?: boolean;
  className?: string;
};

/** Botão-link pill com micro-interação (spring no hover/tap e seta deslizante). */
export function Button({
  href,
  children,
  variant = "solid",
  external,
  className = "",
}: ButtonProps) {
  const styles = {
    solid: "bg-teal text-paper hover:bg-accent",
    ghost: "border-2 border-teal/40 text-teal hover:border-teal hover:bg-mint",
    light: "bg-paper text-teal hover:bg-gold hover:text-ink",
  }[variant];

  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ scale: 1.04, rotate: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 font-display text-base font-medium transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </motion.a>
  );
}
