"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PuzzleCluster, RingTower, Seal } from "@/components/ui/Brand";
import { EASE_OUT_EXPO } from "@/components/motion/FadeIn";
import { INSTAGRAM_URL } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const towerY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-blush/70 via-paper to-paper px-6 pb-16 pt-28"
    >
      {/* Manchas suaves nas cores do logo */}
      <div aria-hidden className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-blush blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-aqua/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 right-1/3 h-56 w-56 rounded-full bg-butter blur-3xl" />
      <PuzzleCluster className="pointer-events-none absolute bottom-0 right-4 hidden h-36 w-64 md:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
            className="mb-6 inline-block rounded-full bg-teal-wash px-4 py-1.5 text-sm font-bold text-teal"
          >
            Projeto de Extensão · Nutrição · CES/UFCG
          </motion.p>

          <h1 className="font-display text-5xl font-semibold leading-[1.08] tracking-tight text-teal sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: EASE_OUT_EXPO }}
              >
                Cada pequeno passo
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-3">
              <motion.span
                className="block font-script text-6xl font-bold text-accent sm:text-7xl lg:text-8xl"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: EASE_OUT_EXPO }}
              >
                é uma grande conquista.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE_OUT_EXPO }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            Acolhemos crianças com Transtorno do Espectro Autista (TEA) e suas
            famílias na jornada da seletividade alimentar, com atividades
            lúdicas, ciência e muito cuidado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE_OUT_EXPO }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={INSTAGRAM_URL} external>
              Conheça no Instagram
            </Button>
            <Button href="#seletividade" variant="ghost">
              Entenda a seletividade
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: towerY }}
          className="relative mx-auto hidden h-[26rem] w-80 items-end justify-center lg:flex"
        >
          <Seal className="absolute inset-0 m-auto h-full w-full" />
          <RingTower className="relative z-10 mb-16 scale-[0.85]" />
        </motion.div>
      </div>
    </section>
  );
}
