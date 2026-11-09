import type { Metadata, Viewport } from "next";
import { Dancing_Script, Fredoka, Nunito } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

// Arredondadas e acolhedoras, como as peças do perfil do projeto
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });
// Letra manuscrita usada nos destaques dos posts ("Obrigado aos...")
const script = Dancing_Script({ variable: "--font-script", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pequenos Passos | Apoio à seletividade alimentar no autismo",
  description:
    "Projeto de extensão (PROBEX) de Nutrição do CES/UFCG que acolhe crianças com TEA e suas famílias diante da seletividade alimentar.",
};

export const viewport: Viewport = {
  themeColor: "#fff9f4",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${fredoka.variable} ${script.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-paper"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
