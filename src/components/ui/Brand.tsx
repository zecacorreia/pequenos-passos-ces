"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/components/motion/FadeIn";

/** Peça de quebra-cabeça (símbolo do autismo), recorrente nos posts do projeto. */
export function Puzzle({
  className = "",
  fill = "#a7ac7f",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className}>
      <path
        fill={fill}
        d="M12 22h26a14 14 0 1 1 24 0h26v26a14 14 0 1 0 0 24v26H62a14 14 0 1 0-24 0H12V72a14 14 0 1 1 0-24z"
      />
    </svg>
  );
}

/** Peças de quebra-cabeça flutuando suavemente (decoração de seção). */
export function PuzzleCluster({ className = "" }: { className?: string }) {
  const pieces = [
    { fill: "#a7ac7f", size: "h-20 w-20", pos: "left-0 bottom-0", rot: -12 },
    { fill: "#9cc4f9", size: "h-24 w-24", pos: "left-16 bottom-4", rot: 8 },
    { fill: "#cd828c", size: "h-16 w-16", pos: "left-40 bottom-0", rot: -6 },
    { fill: "#f2c05f", size: "h-14 w-14", pos: "left-28 bottom-16", rot: 14 },
  ];
  return (
    <div aria-hidden className={className}>
      {pieces.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute ${p.pos} ${p.size}`}
          initial={{ opacity: 0, y: 30, rotate: p.rot - 20 }}
          animate={{ opacity: 1, y: [0, -8, 0], rotate: p.rot }}
          transition={{
            opacity: { duration: 0.8, delay: 1 + i * 0.12 },
            rotate: { duration: 1, delay: 1 + i * 0.12, ease: EASE_OUT_EXPO },
            y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
        >
          <Puzzle fill={p.fill} className="h-full w-full" />
        </motion.div>
      ))}
    </div>
  );
}

/** Torre de argolas, inspirada no logo do projeto (rosa, amarelo, lilás, bege). */
export function RingTower({ className = "" }: { className?: string }) {
  const rings = [
    { w: "w-24", color: "bg-blush", h: "h-8" },
    { w: "w-32", color: "bg-gold", h: "h-9" },
    { w: "w-40", color: "bg-lilac", h: "h-10" },
    { w: "w-48", color: "bg-rose", h: "h-11" },
  ];
  return (
    <div aria-hidden className={`flex flex-col items-center ${className}`}>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 11, delay: 1.5 }}
        className="mb-1 h-8 w-8 rounded-full bg-coral"
      />
      <div className="-mb-1 h-3 w-1.5 rounded-full bg-ink/20" />
      {rings.map((r, i) => (
        <motion.div
          key={i}
          initial={{ y: -80, opacity: 0, scaleX: 0.8 }}
          animate={{ y: 0, opacity: 1, scaleX: 1 }}
          transition={{
            type: "spring",
            stiffness: 170,
            damping: 14,
            delay: 0.6 + (rings.length - 1 - i) * 0.18,
          }}
          whileHover={{ x: i % 2 ? 8 : -8 }}
          className={`${r.w} ${r.h} ${r.color} -mt-1 rounded-full shadow-[inset_0_-5px_0_rgba(0,0,0,0.07)]`}
        />
      ))}
    </div>
  );
}

/**
 * Selo circular do projeto: anel pontilhado em coral e texto em verde-acinzentado
 * girando devagar, como no avatar do perfil.
 */
export function Seal({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 200"
      className={className}
      initial={{ opacity: 0, rotate: -40 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{
        opacity: { duration: 1, delay: 0.6, ease: EASE_OUT_EXPO },
        rotate: { duration: 50, repeat: Infinity, ease: "linear" },
      }}
    >
      <defs>
        <path id="seal-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
      </defs>
      <circle cx="100" cy="100" r="97" fill="#fff9f4" stroke="#ec9c8b" strokeWidth="3" strokeDasharray="0.5 7" strokeLinecap="round" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="#f9c7d6" strokeWidth="1.5" />
      <text fontFamily="var(--font-fredoka)" fontWeight="600" fontSize="15" fill="#3f6f6e">
        <textPath href="#seal-circle" textLength="494" lengthAdjust="spacing">
          PEQUENOS PASSOS · PROBEX · CES/UFCG ·
        </textPath>
      </text>
    </motion.svg>
  );
}
