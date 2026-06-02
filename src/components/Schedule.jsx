import { scheduleItems } from '@/app/data/schedule';

const typeColors = {
  OPENING: 'text-[#00d4ff]',
  LECTURE: 'text-[#4d8eff]',
  BREAK:   'text-muted',
  PANEL:   'text-[#c084fc]',
};

export default function Schedule() {
  return (
    <section id="schedule" className="max-w-[1100px] mx-auto px-6 py-24">
      <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">// schedule</p>
      <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-12">Tutorial Program</h2>
      <div className="relative">
        {/* Track line */}
        <div className="absolute left-[100px] top-0 bottom-0 w-px bg-[#00d4ff]/15 hidden sm:block" />
        <div className="flex flex-col">
          {scheduleItems.map((item, i) => (
            <div key={i} className="relative grid sm:grid-cols-[100px_1fr] gap-8 pb-8 grid-cols-1">
              {/* Time */}
              <div className="hidden sm:block text-right pt-1">
                <span className="font-mono text-[11px] text-muted block">{item.timeStart}</span>
                <span className="font-mono text-[10px] text-dimmed block">{item.timeEnd}</span>
              </div>
              {/* Dot */}
              <div className={`absolute hidden sm:flex left-[92px] top-[6px] w-[18px] h-[18px] rounded-full items-center justify-center bg-[#061428] border-2 ${item.highlight ? 'border-[#00d4ff] dot-glow' : 'border-[#1a6aff]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${item.highlight ? 'bg-[#00d4ff]' : 'bg-[#1a6aff]'}`} />
              </div>
              {/* Card */}
              <div className="bg-[#061428]/80 border border-[#1a6aff]/15 rounded-[10px] px-6 py-4 hover:border-[#00d4ff]/30 transition-colors duration-200">
                <p className="sm:hidden font-mono text-[10px] text-dimmed mb-1">{item.timeStart} – {item.timeEnd}</p>
                <p className={`font-mono text-[10px] tracking-[0.12em] mb-1 ${typeColors[item.type]}`}>{item.type}</p>
                <p className="font-head font-semibold text-[0.95rem] text-[#f0f6ff] mb-1 leading-snug">{item.title}</p>
                <p className="text-[13px] text-muted">{item.speaker && `${item.speaker} · `}{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}