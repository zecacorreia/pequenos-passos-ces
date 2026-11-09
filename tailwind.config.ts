import type { Config } from "tailwindcss";

/**
 * Paleta amostrada das 36 publicações de @pequenospassos.ces.
 * Tons pastel vêm direto dos posts; versões "deep" garantem contraste AA em texto.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fff9f4", // fundo creme dos posts
        ink: "#2e2430",
        muted: "#5b4f61",
        line: "#f3dcdf",
        // Verde-acinzentado dos títulos ("SEJAM BEM-VINDOS": #97b9b9)
        teal: { DEFAULT: "#3f6f6e", soft: "#97b9b9", wash: "#dcebea" },
        // Rosa antigo do script ("ao nosso diário de": #cd828c)
        accent: "#a9505f",
        rose: "#cd828c",
        // Salmão do selo/"SELETIVIDADE ALIMENTAR" (#e79a89 / #ec9c8b)
        coral: "#ec9c8b",
        blush: "#fbdde6", // aquarela rosa (#f9c7d6 clareado)
        olive: "#a7ac7f", // peças de quebra-cabeça
        lilac: "#aa81a3", // argola do logo
        gold: "#f2c05f", // argola amarela
        sky: "#9cc4f9", // gradiente arco-íris
        aqua: "#b9e6e6",
        mint: "#c8f8db",
        butter: "#fdf1cf",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
