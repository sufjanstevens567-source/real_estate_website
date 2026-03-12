"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div key={item.question} className="editorial-card overflow-hidden">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="max-w-[28ch] text-[2.2rem] leading-[1.05] text-[#522717]">
                  {item.question}
                </span>
                <span
                  className={[
                    "grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#d8c2b4] bg-[#fff8eb] transition-transform duration-300 ease-premium",
                    isOpen ? "rotate-45" : "",
                  ].join(" ")}
                >
                  <Plus className="h-5 w-5 text-[#8a4b30]" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pt-6">
                    <p className="max-w-3xl text-[1.7rem] leading-[1.7] text-[rgba(82,39,23,0.74)]">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
