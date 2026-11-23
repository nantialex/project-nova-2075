"use client";

import { COMMUNITIES, type CommunityId } from "@/lib/nova-data";
import { cn } from "@/lib/utils";

type CommunityMapProps = {
  selected: CommunityId;
  onSelect: (id: CommunityId) => void;
};

export function CommunityMap({ selected, onSelect }: CommunityMapProps) {
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_40%_30%,#2a5a5f_0%,#123038_45%,#0a1a20_100%)]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 70" aria-hidden>
        <ellipse
          cx="50"
          cy="36"
          rx="42"
          ry="24"
          fill="none"
          stroke="rgba(126,184,176,0.25)"
          strokeWidth="0.3"
        />
        <path
          d="M12 40 C 28 22, 40 18, 52 28 S 78 34, 88 24"
          fill="none"
          stroke="rgba(212,161,90,0.35)"
          strokeWidth="0.35"
          strokeDasharray="1.2 1.2"
          className="animate-[nova-dash_12s_linear_infinite]"
        />
        <path
          d="M18 52 C 34 46, 48 58, 66 48 S 86 42, 94 50"
          fill="none"
          stroke="rgba(126,184,176,0.3)"
          strokeWidth="0.3"
          strokeDasharray="1 1.4"
          className="animate-[nova-dash_16s_linear_infinite]"
        />
      </svg>

      {COMMUNITIES.map((community) => {
        const isActive = community.id === selected;
        return (
          <button
            key={community.id}
            type="button"
            onClick={() => onSelect(community.id)}
            className={cn(
              "group absolute -translate-x-1/2 -translate-y-1/2 text-left transition-transform duration-300",
              isActive ? "z-20 scale-110" : "z-10 hover:scale-105",
            )}
            style={{ left: `${community.x}%`, top: `${community.y}%` }}
            aria-pressed={isActive}
          >
            <span
              className={cn(
                "relative flex size-3.5 items-center justify-center rounded-full",
                isActive ? "bg-[#f0c27a]" : "bg-[#7eb8b0]",
              )}
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-full",
                  isActive
                    ? "animate-ping bg-[#f0c27a]/50"
                    : "bg-[#7eb8b0]/30 group-hover:animate-pulse",
                )}
              />
            </span>
            <span
              className={cn(
                "mt-2 block max-w-[9rem] text-[0.7rem] font-medium tracking-wide sm:text-xs",
                isActive ? "text-[#f7e2b8]" : "text-white/70 group-hover:text-white",
              )}
            >
              {community.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
