import { MissionControl } from "@/components/mission-control";
import { NovaHero } from "@/components/nova-hero";

export default function Home() {
  return (
    <main className="flex-1">
      <NovaHero />
      <MissionControl />
      <footer className="border-t border-white/10 bg-[#071014] px-5 py-10 text-white/55 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-[#d4a15a] uppercase">
            Project NOVA 2075
          </p>
          <p className="text-sm">
            Conceptual vision for safer, smarter, more inclusive communities.
          </p>
        </div>
      </footer>
    </main>
  );
}
