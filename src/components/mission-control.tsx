"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommunityMap } from "@/components/community-map";
import {
  COMMUNITIES,
  SYSTEMS,
  boostedMetrics,
  type CommunityId,
  type SystemId,
} from "@/lib/nova-data";
import { cn } from "@/lib/utils";

export function MissionControl() {
  const [selectedId, setSelectedId] = useState<CommunityId>("aurora-fjord");
  const [active, setActive] = useState<Set<SystemId>>(
    () => new Set(["satellite", "energy"]),
  );
  const [drillStep, setDrillStep] = useState(-1);
  const [running, setRunning] = useState(false);

  const community = useMemo(
    () => COMMUNITIES.find((item) => item.id === selectedId) ?? COMMUNITIES[0],
    [selectedId],
  );

  const metrics = useMemo(
    () => boostedMetrics(community, active),
    [community, active],
  );

  useEffect(() => {
    setDrillStep(-1);
    setRunning(false);
  }, [selectedId]);

  useEffect(() => {
    if (!running) return;

    if (drillStep >= community.drill.steps.length - 1) {
      setRunning(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setDrillStep((step) => step + 1);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [running, drillStep, community.drill.steps.length]);

  function toggleSystem(id: SystemId) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function startDrill() {
    setActive(new Set(SYSTEMS.map((system) => system.id)));
    setDrillStep(0);
    setRunning(true);
  }

  function resetDemo() {
    setActive(new Set(["satellite", "energy"]));
    setDrillStep(-1);
    setRunning(false);
  }

  return (
    <section
      id="mission-control"
      className="relative scroll-mt-8 border-t border-white/10 bg-[#071014] px-5 py-16 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-[family-name:var(--font-display)] text-sm tracking-[0.28em] text-[#d4a15a] uppercase">
            Mission Control
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight sm:text-4xl">
            Choose a community. Switch on the systems. Run a live crisis drill.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            This interactive slice shows how aerospace links, smart energy, and
            AI response can reinforce one another when a place needs them most.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <CommunityMap selected={selectedId} onSelect={setSelectedId} />

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                    {community.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {community.region} · {community.population} people ·{" "}
                    {community.focus}
                  </p>
                </div>
                <Badge className="border-white/15 bg-[#1a3a42] text-[#c8e4df]">
                  Sample scenario
                </Badge>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                {community.challenge}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                System stack
              </h3>
              <p className="mt-1 text-sm text-white/55">
                Toggle layers to see how coverage and response change.
              </p>
              <ul className="mt-4 space-y-2">
                {SYSTEMS.map((system) => {
                  const isOn = active.has(system.id);
                  return (
                    <li key={system.id}>
                      <button
                        type="button"
                        onClick={() => toggleSystem(system.id)}
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-xl border px-3 py-3 text-left transition-colors",
                          isOn
                            ? "border-[#d4a15a]/45 bg-[#d4a15a]/10"
                            : "border-white/10 bg-transparent hover:border-white/25",
                        )}
                        aria-pressed={isOn}
                      >
                        <span>
                          <span className="block text-sm font-medium">
                            {system.label}
                          </span>
                          <span className="mt-0.5 block text-xs text-white/55">
                            {system.description}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "shrink-0 rounded-md px-2 py-1 text-[0.7rem] font-semibold tracking-wide uppercase",
                            isOn
                              ? "bg-[#d4a15a] text-[#1a1208]"
                              : "bg-white/10 text-white/60",
                          )}
                        >
                          {isOn ? "On" : "Off"}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                Live readout
              </h3>
              <dl className="mt-4 grid grid-cols-2 gap-3">
                {SYSTEMS.map((system) => (
                  <div
                    key={system.id}
                    className="rounded-xl border border-white/8 bg-black/20 px-3 py-3"
                  >
                    <dt className="text-[0.7rem] tracking-wide text-white/50 uppercase">
                      {system.metricLabel}
                    </dt>
                    <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl text-[#f0c27a] tabular-nums">
                      {metrics[system.id]}
                      <span className="ml-1 text-sm text-white/45">
                        {system.unit}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(26,58,66,0.45),rgba(7,16,20,0.85))] p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Crisis drill
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                {community.drill.trigger}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                size="lg"
                onClick={startDrill}
                disabled={running}
                className="h-11 rounded-xl bg-[#d4a15a] px-5 text-[#1a1208] hover:bg-[#e0b36f]"
              >
                {running ? "Drill running…" : "Run emergency drill"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={resetDemo}
                className="h-11 rounded-xl border-white/20 bg-transparent px-5 text-white hover:bg-white/10"
              >
                Reset
              </Button>
            </div>
          </div>

          <ol className="mt-6 space-y-3">
            {community.drill.steps.map((step, index) => {
              const revealed = drillStep >= index;
              return (
                <li
                  key={step}
                  className={cn(
                    "flex gap-3 rounded-xl border px-4 py-3 text-sm transition-all duration-500 sm:text-base",
                    revealed
                      ? "translate-x-0 border-[#7eb8b0]/35 bg-[#7eb8b0]/10 opacity-100"
                      : "translate-x-1 border-white/5 bg-black/10 opacity-35",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                      revealed
                        ? "bg-[#7eb8b0] text-[#0c1a1f]"
                        : "bg-white/10 text-white/50",
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className={revealed ? "text-white" : "text-white/50"}>
                    {step}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
