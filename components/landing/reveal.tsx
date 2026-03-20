"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type NativeDivProps = Omit<
  ComponentPropsWithoutRef<"div">,
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDrag"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDragStart"
  | "onDrop"
>;

type RevealProps = PropsWithChildren<
  NativeDivProps & {
    delay?: number;
    y?: number;
  }
>;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
