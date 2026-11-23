export function OrbitalBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,#3d7a8c_0%,transparent_45%),radial-gradient(ellipse_at_85%_20%,#d4a15a_0%,transparent_35%),radial-gradient(ellipse_at_50%_100%,#1a3a42_0%,#0c1a1f_55%,#071014_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0.6px,transparent_0.7px)] [background-size:3px_3px]" />
      <div className="absolute -right-[12%] top-[8%] h-[58vmin] w-[58vmin] rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_35%,#7eb8b0_0%,#2f6b6a_28%,#16363c_58%,#0a1c22_78%)] shadow-[0_0_80px_rgba(90,170,160,0.18)] animate-[nova-drift_18s_ease-in-out_infinite]" />
      <div className="absolute -right-[2%] top-[18%] h-[38vmin] w-[38vmin] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,220,160,0.18),transparent_55%)] blur-2xl animate-[nova-pulse_7s_ease-in-out_infinite]" />
      <div className="absolute left-[-8%] bottom-[-18%] h-[48vmin] w-[90vmin] rotate-[-8deg] rounded-[50%] bg-[linear-gradient(180deg,transparent_0%,rgba(18,48,54,0.55)_40%,rgba(8,20,24,0.9)_100%)] blur-md" />
      <svg
        className="absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M -5 72 C 20 58, 40 80, 58 64 S 90 48, 110 56"
          fill="none"
          stroke="rgba(212,161,90,0.35)"
          strokeWidth="0.2"
          className="animate-[nova-draw_4.5s_ease_forwards]"
        />
        <path
          d="M -5 40 C 25 28, 45 52, 70 36 S 95 22, 110 30"
          fill="none"
          stroke="rgba(126,184,176,0.4)"
          strokeWidth="0.18"
          className="animate-[nova-draw_5.5s_ease_0.4s_forwards]"
        />
      </svg>
    </div>
  );
}
