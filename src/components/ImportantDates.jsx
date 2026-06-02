const dates = [
  { label: 'Registration Opens',          value: 'June 15, 2026',  description: 'Early bird registration for UbiComp 2026 attendees',             status: 'open'      },
  { label: 'Early Registration Deadline', value: 'Aug 1, 2026',    description: 'Reduced fee deadline for all participants',                        status: 'upcoming'  },
  { label: 'Materials Release',           value: 'Oct 3, 2026',    description: 'Slides, notebooks, and readings pre-released to registrants',      status: 'upcoming'  },
  { label: 'Tutorial Date',               value: 'Oct 5, 2026',    description: 'Half-day morning session at UbiComp 2026, Shanghai',               status: 'confirmed' },
];

const statusStyles = {
  open:      'bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-[#00d4ff]',
  upcoming:  'bg-[#1a6aff]/10 border border-[#1a6aff]/25 text-[#4d8eff]',
  confirmed: 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400',
};

const statusLabels = { open: 'open soon', upcoming: 'upcoming', confirmed: 'confirmed' };

export default function ImportantDates() {
  return (
    <section id="dates" className="max-w-[1100px] mx-auto px-6 py-24">
      <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">// important dates</p>
      <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-10">Key Deadlines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dates.map(d => (
          <div key={d.label} className="bg-[#061428]/90 border border-[#1a6aff]/20 rounded-[10px] p-6 flex flex-col gap-3">
            <span className="font-mono text-[11px] text-muted tracking-[0.08em]">{d.label}</span>
            <span className="font-head font-bold text-[1.1rem] text-[#00d4ff]">{d.value}</span>
            <span className="text-[13px] text-muted leading-relaxed flex-1">{d.description}</span>
            <span className={`inline-block self-start font-mono text-[10px] px-2.5 py-0.5 rounded-full ${statusStyles[d.status]}`}>
              {statusLabels[d.status]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}