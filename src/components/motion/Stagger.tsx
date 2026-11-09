"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { EASE_OUT_EXPO } from "./FadeIn";

const container = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

type ContainerProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView"> & {
  stagger?: number;
  delayChildren?: number;
};

/** Orquestra a entrada em cascata dos `StaggerItem` filhos ao entrar na viewport. */
export function StaggerContainer({
  stagger = 0.12,
  delayChildren = 0,
  children,
  ...props
}: ContainerProps) {
  return (
    <motion.div
      variants={container(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Filho de `StaggerContainer`: herda os estados `hidden`/`show` do pai. */
export function StaggerItem({
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "variants">) {
  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  );
}
