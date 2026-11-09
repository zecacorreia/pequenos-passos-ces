"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { Puzzle } from "@/components/ui/Brand";
import { APPROACHES } from "@/lib/content";

// Classes estáticas (o Tailwind precisa vê-las por inteiro). Cores das argolas do logo.
const TINTS = {
  lilac: { card: "bg-lilac/15 hover:bg-lilac/25", dot: "bg-lilac", fill: "#aa81a3" },
  gold: { card: "bg-gold/20 hover:bg-gold/30", dot: "bg-gold", fill: "#f2c05f" },
  coral: { card: "bg-coral/20 hover:bg-coral/30", dot: "bg-coral", fill: "#ec9c8b" },
  sky: { card: "bg-sky/20 hover:bg-sky/30", dot: "bg-sky", fill: "#9cc4f9" },
} as const;

export function Approaches() {
  return (
    <section id="abordagens" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blush blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 font-script text-3xl font-bold text-accent">
            nossas abordagens
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-teal sm:text-6xl">
            Quatro frentes, um mesmo cuidado.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Baseadas em evidências científicas, as abordagens se complementam e
            são ajustadas ao perfil de cada criança e de cada família.
          </p>
        </FadeIn>

        {/* 1 coluna no mobile → 2 no tablet → 4 em telas largas */}
        <StaggerContainer
          stagger={0.15}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {APPROACHES.map((a, i) => {
            const t = TINTS[a.tint];
            return (
              <StaggerItem key={a.id} className="h-full">
                <motion.article
                  whileHover={{ y: -8, rotate: i % 2 ? 0.6 : -0.6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 transition-colors duration-300 ${t.card}`}
                >
                  <Puzzle
                    fill={t.fill}
                    className="absolute -right-4 -top-4 h-20 w-20 rotate-12 opacity-80"
                  />
                  <span className="font-display text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-teal">
                    {a.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{a.summary}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-ink/10 pt-5 text-sm font-semibold">
                    {a.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden
                          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${t.dot}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
