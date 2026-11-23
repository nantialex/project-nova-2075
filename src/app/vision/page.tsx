export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#071014] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.28em] text-[#d4a15a] uppercase">
          Project NOVA 2075
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-5xl">
          The polity of 2075
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          A short vision film about safer, smarter, and more inclusive
          communities — connected by satellites, smart energy, and AI emergency
          care.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black">
          <video
            className="aspect-video w-full"
            controls
            playsInline
            preload="metadata"
            poster="/vision/nova-2075-orbit.jpg"
          >
            <source src="/vision/nova_2075_polity_vision.mp4" type="video/mp4" />
          </video>
        </div>

        <p className="mt-6 text-sm text-white/50">
          English narration · conceptual vision film
        </p>
      </div>
    </main>
  );
}
