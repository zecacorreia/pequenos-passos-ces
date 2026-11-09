"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { NAV_LINKS } from "@/lib/content";

export function Header() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-teal"
        >
          <span aria-hidden className="flex items-end gap-0.5">
            <i className="h-2 w-2 rounded-full bg-lilac" />
            <i className="h-3 w-2 rounded-full bg-gold" />
            <i className="h-4 w-2 rounded-full bg-rose" />
          </span>
          Pequenos Passos
        </a>
        <nav aria-label="Principal" className="hidden gap-8 text-sm sm:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 font-semibold text-muted transition-colors hover:text-teal after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-rose after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-1 origin-left rounded-r-full bg-gradient-to-r from-lilac via-gold to-rose"
      />
    </motion.header>
  );
}
