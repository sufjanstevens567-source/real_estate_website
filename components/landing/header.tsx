"use client";

import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 lg:px-10 lg:pt-6">
      <div className="flex justify-end">
        <div className="pointer-events-auto relative">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="hero-menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center gap-4 text-[#3f2115] sm:gap-5"
          >
            <span className="text-[1.55rem] font-medium uppercase tracking-[-0.01em] sm:text-[1.75rem]">
              MENU
            </span>
            <span className="grid h-[5.2rem] w-[5.2rem] place-items-center rounded-full bg-[#f7f0df] text-[#7c5236] shadow-none sm:h-[5.8rem] sm:w-[5.8rem]">
              <span className="sr-only">Toggle menu</span>
              {open ? <X className="h-7 w-7" strokeWidth={2.5} /> : <Menu className="h-7 w-7" strokeWidth={2.5} />}
            </span>
          </button>

          <motion.div
            id="hero-menu"
            initial={false}
            animate={open ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -10, pointerEvents: "none" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full mt-4 w-[28rem]"
            aria-hidden={!open}
          >
            <div className="rounded-[2.8rem] border border-[#dbc8b3] bg-[rgba(248,240,223,0.98)] p-5 shadow-[0_20px_60px_rgba(82,39,23,0.12)]">
              <p className="text-[1rem] font-semibold uppercase tracking-[0.22em] text-[#8a4b30]">
                Property Motion Studio
              </p>
              <nav className="mt-5 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[1.6rem] font-medium text-[#522717]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="#contact" onClick={() => setOpen(false)} className="secondary-button">
                  Request Pricing
                </Link>
                <Link href="#book-call" onClick={() => setOpen(false)} className="primary-button">
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
