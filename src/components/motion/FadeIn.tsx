"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

type FadeInProps = Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView"> & {
  /** Atraso em segundos. */
  delay?: number;
  /** Deslocamento inicial no eixo Y (px). Negativo vem de cima. */
  y?: number;
  duration?: number;
  /** Anima só na primeira vez que entra na viewport. */
  once?: boolean;
};

/**
 * Scroll reveal: fade-in + translação no eixo Y quando o elemento entra na tela.
 */
export function FadeIn({
  delay = 0,
  y = 32,
  duration = 0.9,
  once = true,
  children,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
