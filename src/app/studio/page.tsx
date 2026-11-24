import {
  LOVABLE_STUDIO_URL,
  STUDIO_PILLARS,
  STUDIO_ROADMAP,
  STUDIO_VISION,
} from "@/lib/studio-data";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#071014] text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.28em] text-[#d4a15a] uppercase">
          Lovable studio · NASA TTT
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-5xl">
          Project Nova 2075 presentation
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Fusion-powered, self-healing habitats where regenerative life support
          and trusted AI let humanity thrive sustainably — in orbit, on the
          Moon, and back on Earth.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={LOVABLE_STUDIO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[#d4a15a] px-5 text-[#1a1208] transition-colors hover:bg-[#e0b36f]"
          >
            Open live Lovable app
          </a>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 px-5 text-white transition-colors hover:bg-white/10"
          >
            Back to mission control
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_60px_rgba(26,58,66,0.35)]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/50 sm:text-sm">
            <span>Live embed · suds-and-sunshine-studio.lovable.app</span>
            <a
              href={LOVABLE_STUDIO_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#d4a15a] hover:underline"
            >
              Fullscreen →
            </a>
          </div>
          <iframe
            title="NOVA 2075 Lovable Studio"
            src={LOVABLE_STUDIO_URL}
            className="h-[70vh] w-full bg-[#0b1220]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight sm:text-3xl">
            The 2075 vision
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {STUDIO_VISION.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-2xl" aria-hidden>
                  {item.icon}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight sm:text-3xl">
            Core technological pillars
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {STUDIO_PILLARS.map((pillar) => (
              <article
                key={pillar.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-[#f0c27a]">
                    {pillar.name}
                  </h3>
                  <span className="rounded-md bg-[#1a3a42] px-2 py-1 text-xs text-[#c8e4df]">
                    TRL {pillar.trl}/9
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {pillar.desc}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-white/55">
                  {pillar.specs.map((spec) => (
                    <li key={spec}>· {spec}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-[#7eb8b0]">
                  Impact · {pillar.impact}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight sm:text-3xl">
            Roadmap to 2075
          </h2>
          <ol className="mt-6 space-y-3">
            {STUDIO_ROADMAP.map((step) => (
              <li
                key={step.year}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
              >
                <span className="font-[family-name:var(--font-display)] text-xl text-[#d4a15a]">
                  {step.year}
                </span>
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
