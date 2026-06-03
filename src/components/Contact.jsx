const contacts = [
  { label: 'GENERAL CHAIRS', value: 'tutorial@ubicomp2026.org',         href: 'mailto:generalchairs-2026@ubicomp.org'           },
  { label: 'WORKSHOP CHAIRS',  value: 'lin.chen@tsinghua.edu.cn',         href: 'mailto:workshop-2026@ubicomp.org'           },
  { label: 'Conference Website',value: 'ubicomp.org/ubicomp2026',          href: 'https://www.ubicomp.org/ubicomp-iswc-2026/',  external: true },
  { label: 'REGISTRATION CHAIRS',    value: '@ubicomp2026',                      href: 'mailto:registration-2026@ubicomp.org'},
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1100px] mx-auto px-6 py-24">
      <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">// contact</p>
      <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-10">Get in Touch</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contacts.map(item => (
          <div key={item.label} className="bg-[#061428]/90 border border-[#1a6aff]/15 rounded-[10px] p-6 text-center flex flex-col items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center">
              <svg width="18" height="18" stroke="#00d4ff" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <p className="font-mono text-[11px] text-muted">{item.label}</p>
            <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}
              className="text-[13px] text-[#88b8ff] hover:text-[#00d4ff] transition-colors break-all">
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}