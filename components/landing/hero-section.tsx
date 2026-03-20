"use client";

import Link from "next/link";
import { ArrowDown, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/landing/reveal";

const DESKTOP_BASE_WIDTH = 1920;
const DESKTOP_BASE_HEIGHT = 1200;

function getDesktopScale() {
  if (typeof window === "undefined") return 1;

  const horizontalPadding = window.innerWidth >= 1800 ? 28 : 20;
  const verticalPadding = 16;
  const widthScale = (window.innerWidth - horizontalPadding) / DESKTOP_BASE_WIDTH;
  const heightScale = (window.innerHeight - verticalPadding) / DESKTOP_BASE_HEIGHT;

  return Math.min(widthScale, heightScale, 1);
}

function VideoPlaceholder({ desktop = false }: { desktop?: boolean }) {
  return (
    <div className={desktop ? "hero-video hero-video--desktop" : "hero-video"} aria-hidden="true">
      <div className="hero-video__backdrop" />
      <div className="hero-video__overlay" />
      <div className="hero-video__grid" />
      <div className="hero-video__play">
        <Play className={desktop ? "h-10 w-10 fill-current" : "h-6 w-6 fill-current"} strokeWidth={1.6} />
      </div>
      <div className="hero-video__label">Demo video placeholder</div>
    </div>
  );
}

export function HeroSection() {
  const [desktopScale, setDesktopScale] = useState(0.92);

  useEffect(() => {
    const updateScale = () => setDesktopScale(getDesktopScale());
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#eea81b]">
      <Reveal className="relative min-h-screen">
        <div className="px-5 pb-12 pt-5 sm:px-8 lg:hidden">
          <div className="absolute left-5 top-4 z-20 sm:left-8 sm:top-5">
            <p className="max-w-[18rem] text-[1.6rem] font-medium leading-[0.94] tracking-[-0.035em] text-[#3f2115] sm:text-[1.8rem]">
              <span className="block">Built for Irish</span>
              <span className="block">estate agencies</span>
            </p>
          </div>

          <div className="pointer-events-none absolute left-0 top-[8.6rem] z-10 w-full px-2 sm:top-[9.2rem] sm:px-4">
            <span className="hero-word">motion</span>
          </div>

          <div className="relative z-20 flex min-h-screen flex-col justify-between gap-12 pb-10 pt-[25rem] sm:pt-[28rem]">
            <div className="space-y-8">
              <h1 className="sr-only">
                Premium property videos built from listing photos for Irish estate agencies.
              </h1>
              <div className="max-w-[33rem] pl-2">
                <p className="text-[2.2rem] leading-[1.22] tracking-[-0.03em] text-[#3f2115] sm:text-[2.5rem]">
                  Premium property videos built from listing photos, designed to give agencies a
                  stronger visual story without arranging a full production day.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="hero-reference-media">
                <VideoPlaceholder />
              </div>
              <Link href="#demo" className="hero-rail flex items-center gap-4 pl-2 text-[#3f2115]">
                <span className="hero-rail__label">Discover More</span>
                <ArrowDown className="h-5 w-5" strokeWidth={1.35} />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden min-h-screen items-start justify-center px-4 pt-2 lg:flex">
          <div
            className="hero-desktop-shell"
            style={{
              width: DESKTOP_BASE_WIDTH * desktopScale,
              height: DESKTOP_BASE_HEIGHT * desktopScale,
            }}
          >
            <div className="hero-desktop-stage" style={{ transform: `scale(${desktopScale})` }}>
              <p className="hero-desktop-intro">
                <span className="block">Built for Irish</span>
                <span className="block">estate agencies</span>
              </p>

              <span className="hero-desktop-word">motion</span>

              <h1 className="sr-only">
                Premium property videos built from listing photos for Irish estate agencies.
              </h1>

              <Link href="#demo" className="hero-desktop-rail" aria-label="Discover more about the demo">
                <span className="hero-desktop-railLabel">Discover More</span>
                <span className="hero-desktop-railLine" />
                <ArrowDown className="h-5 w-5 shrink-0 -mt-1" strokeWidth={1.5} />
              </Link>

              <p className="hero-desktop-lead">
                Premium property videos built from listing photos. A stronger visual story for
                portals, vendor conversations, and agency marketing without arranging a full
                production day.
              </p>

              <div className="hero-desktop-mediaWrap" aria-hidden="true">
                <div className="hero-desktop-media">
                  <VideoPlaceholder desktop />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
