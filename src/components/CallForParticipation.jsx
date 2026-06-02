export default function CallForParticipation() {
  return (
    <section id="cfp" className="max-w-[1100px] mx-auto px-6 py-16">
      <div className="relative cfp-glow bg-[#061428]/90 border border-[#00d4ff]/20 rounded-2xl p-12 text-center overflow-hidden">
        <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-4">// call for participation</p>
        <h2 className="font-head font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] mb-4">Join Us in Shanghai</h2>
        <p className="text-muted max-w-[520px] mx-auto leading-[1.8] mb-10">
          We invite researchers, practitioners, and students from ubiquitous computing, HCI,
          mobile systems, and quantum information to attend. No quantum background required.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#contact" className="font-mono text-[12px] tracking-[0.06em] bg-[#1a6aff] hover:bg-[#4d8eff] text-white px-7 py-3 rounded transition-all duration-200 hover:-translate-y-px">
            Express Interest
          </a>
          <a href="#overview" className="font-mono text-[12px] tracking-[0.06em] border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/8 px-7 py-3 rounded transition-all duration-200 hover:-translate-y-px">
            Read the Abstract
          </a>
        </div>
      </div>
    </section>
  );
}