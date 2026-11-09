import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { BEHAVIOR_PATTERNS, DIMENSIONS, STATS } from "@/lib/content";

// Cada dimensão ganha uma cor do gradiente pastel dos posts
const DIM_STYLES = ["bg-aqua/50", "bg-blush", "bg-butter"];

export function WhatIsSelectivity() {
  return (
    <section
      id="seletividade"
      className="rounded-t-[3rem] bg-gradient-to-b from-teal-wash/70 via-paper to-paper px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 font-script text-3xl font-bold text-accent">
            o que é a seletividade alimentar
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-teal sm:text-6xl">
            Não é birra, nem falta de limites.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <FadeIn delay={0.1}>
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              Crianças autistas enfrentam, com muito mais frequência do que seus
              pares, problemas na hora de comer. A seletividade alimentar
              descreve um conjunto de padrões — e quase nunca é uma escolha da
              criança.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Padrões comuns">
              {BEHAVIOR_PATTERNS.map((p) => (
                <li
                  key={p}
                  className="rounded-full border-2 border-coral/60 bg-paper px-4 py-2 text-sm font-semibold"
                >
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              Ela é <strong className="font-bold text-ink">multidimensional</strong>:
              fatores orgânicos, sensoriais e comportamentais costumam coexistir.
              Por isso a recusa alimentar precisa ser compreendida antes de ser
              tratada — e quanto mais cedo, melhor, pois o padrão tende a
              persistir ao longo da infância.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-20 grid gap-4 md:grid-cols-3">
          {DIMENSIONS.map((d, i) => (
            <StaggerItem
              key={d.key}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={`rounded-[2rem] p-8 ${DIM_STYLES[i]}`}
            >
              <span className="font-script text-2xl font-bold text-accent">
                {i + 1}.
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-teal">
                {d.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{d.text}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer
          stagger={0.1}
          className="mt-20 grid gap-10 border-t-2 border-dashed border-coral/50 pt-12 sm:grid-cols-3"
        >
          {STATS.map((s) => (
            <StaggerItem key={s.value}>
              <p className="font-display text-5xl font-semibold tracking-tight text-accent sm:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 text-base font-semibold">{s.label}</p>
              <p className="mt-1 text-sm text-muted">{s.compare}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12">
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            Fonte: Esposito et al. (2023), Diretrizes para Avaliação e
            Intervenções Clínicas da Seletividade Alimentar em Crianças com
            Autismo. Conteúdo educativo; não substitui avaliação profissional.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
