import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { STUDIES } from "@/lib/content";

const linkBase =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-medium transition-colors duration-300";

export function Studies() {
  return (
    <section id="estudos" className="px-6 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 font-script text-3xl font-bold text-accent">
            para ler e baixar
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-teal sm:text-5xl">
            Estudos que embasam nosso trabalho.
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-2">
          {STUDIES.map((s) => (
            <StaggerItem
              key={s.file}
              className="flex flex-col rounded-[2rem] bg-teal-wash/70 p-8"
            >
              <span className="w-fit rounded-full bg-paper px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal">
                {s.format} · {s.size}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-teal">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">
                {s.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {s.canRead && (
                  <a
                    href={s.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBase} bg-teal text-paper hover:bg-accent`}
                  >
                    Ler online
                  </a>
                )}
                <a
                  href={s.file}
                  download
                  className={`${linkBase} border-2 border-teal/40 text-teal hover:border-teal hover:bg-paper`}
                >
                  Baixar {s.format}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
