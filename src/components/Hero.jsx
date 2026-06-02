'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-quantum-grid animate-[gridPulse_8s_ease-in-out_infinite] opacity-70" />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(26,106,255,0.15) 0%, transparent 70%)' }} />
        <span className="absolute top-[20%] left-[15%] w-[3px] h-[3px] rounded-full bg-[#00d4ff] animate-[orbit_15s_linear_infinite]" />
        <span className="absolute top-[70%] right-[20%] w-[2px] h-[2px] rounded-full bg-[#4d8eff] animate-[orbit_20s_linear_infinite]" />
        <span className="absolute top-[50%] left-[60%] w-[4px] h-[4px] rounded-full bg-[#00d4ff]/50 animate-[orbit_18s_linear_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[820px] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-px bg-[#00d4ff]/50" />
          <span className="font-mono text-[11px] text-[#00d4ff] tracking-[0.2em] uppercase">UbiComp 2026 Tutorial</span>
          <span className="w-10 h-px bg-[#00d4ff]/50" />
        </div>

        <h1 className="font-head font-extrabold text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.1] tracking-tight mb-6">
          <span className="text-[#00d4ff]">Quantum Computing</span>
          <span className="text-[#4d8eff] mx-2">&amp;</span>
           Ubiquitous <br />Pervasive
          Computing Systems
        </h1>

        <p className="text-muted text-[1.05rem] max-w-[580px] mx-auto leading-[1.8] mb-10">
          Tutorial: Quantum Computing for Ubiquitous and Pervasive
          Computing Systems
        </p>
{/* October 11-12, 2026. */}
        <div className="flex items-center justify-center gap-8 flex-wrap mb-12">
          {[
            { icon: '📅', label: 'October 11-12, 2026' },
            { icon: '📍', label: 'Shanghai, China'   },
            { icon: '⏱',  label: 'Half-Day Session (approx. 3-4 hours)' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 font-mono text-[12px] text-muted">
              <span>{item.icon}</span>{item.label}
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#cfp"
            className="font-mono text-[12px] tracking-[0.06em] bg-[#1a6aff] hover:bg-[#4d8eff] text-white px-7 py-3 rounded transition-all duration-200 hover:-translate-y-px">
            Register Interest
          </a>
          <a href="#overview"
            className="font-mono text-[12px] tracking-[0.06em] border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/8 px-7 py-3 rounded transition-all duration-200 hover:-translate-y-px">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="font-mono text-[10px] text-muted tracking-[0.1em]">scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}