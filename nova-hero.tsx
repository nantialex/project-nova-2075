"use client";

import { Button } from "@/components/ui/button";
import { OrbitalBackdrop } from "@/components/orbital-backdrop";

export function NovaHero() {
  function enterMissionControl() {
    document
      .getElementById("mission-control")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-white">
      <OrbitalBackdrop />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-12">
        <div className="max-w-3xl animate-[nova-rise_1.1s_ease_both]">
          <p className="mb-5 font-[family-name:var(--font-display)] text-[clamp(3.4rem,12vw,7.5rem)] leading-[0.88] tracking-[-0.04em]">
            NOVA
            <span className="block text-[0.42em] tracking-[0.22em] text-[#d4a15a]">
              2075
            </span>
          </p>
          <h1 className="max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.45rem,3.4vw,2.35rem)] leading-tight tracking-tight text-white/95">
            A connected world for everyone
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/72 sm:text-lg">
            Explore how satellites, smart energy, and AI emergency response can
            protect remote and dense communities alike.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={enterMissionControl}
              className="h-12 rounded-xl bg-[#d4a15a] px-6 text-base text-[#1a1208] hover:bg-[#e0b36f]"
            >
              Enter mission control
            </Button>
            <a
              href="/vision"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-transparent px-6 text-base text-white transition-colors hover:bg-white/10"
            >
              Watch the 2075 vision
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
