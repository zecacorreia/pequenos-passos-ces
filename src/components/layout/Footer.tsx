import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Puzzle } from "@/components/ui/Brand";
import { FOOTER_LINKS, INSTAGRAM_URL, INSTITUTION } from "@/lib/content";

export function Footer() {
  const contacts = [
    { label: "Instagram", value: INSTITUTION.instagramHandle, href: INSTAGRAM_URL },
    INSTITUTION.email && {
      label: "E-mail",
      value: INSTITUTION.email,
      href: `mailto:${INSTITUTION.email}`,
    },
    INSTITUTION.phone && { label: "Telefone", value: INSTITUTION.phone },
    INSTITUTION.address && { label: "Endereço", value: INSTITUTION.address },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <footer id="contato" className="relative overflow-hidden rounded-t-[3rem] bg-teal px-6 py-24 text-paper">
      <Puzzle fill="#a7ac7f" className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rotate-12 opacity-40" />
      <Puzzle fill="#f9c7d6" className="pointer-events-none absolute right-40 top-24 hidden h-20 w-20 -rotate-12 opacity-30 md:block" />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 font-script text-3xl font-bold text-blush">
            junte-se a nós
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Vamos dar o próximo passo juntos?
          </h2>
          <div className="mt-8">
            <Button href={INSTAGRAM_URL} external variant="light">
              Fale com a gente
            </Button>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-12 border-t border-paper/20 pt-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">{INSTITUTION.project}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/75">
              {INSTITUTION.program}, do {INSTITUTION.name}, dedicado ao apoio de
              crianças com TEA e suas famílias.
            </p>
          </div>

          <nav aria-label="Links úteis">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-paper/60">
              Links úteis
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-paper/60">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {contacts.map((c) => (
                <li key={c.label}>
                  <span className="text-paper/60">{c.label}: </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="underline-offset-4 hover:underline"
                    >
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-xs text-paper/60">
          © {new Date().getFullYear()} {INSTITUTION.project} · {INSTITUTION.name}.
          Conteúdo informativo, não substitui o acompanhamento de profissionais
          de saúde.
        </p>
      </div>
    </footer>
  );
}
