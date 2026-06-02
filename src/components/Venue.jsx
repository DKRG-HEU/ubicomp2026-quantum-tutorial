export default function Venue() {
  return (
    <section id="venue" className="max-w-[1100px] mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">// venue · shanghai</p>
          <h2 className="font-head font-bold text-[clamp(1.6rem,2.5vw,2.4rem)] leading-[1.2] mb-6">
            Shanghai World Expo Exhibition &amp; Convention Centre
          </h2>
          <p className="text-muted leading-[1.9] mb-6">
            UbiComp 2026 takes place at one of Asia's premier convention venues, located along the Huangpu River in Shanghai's Pudong district.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { title: 'Pudong New Area',    detail: '1099 Guozhan Rd, Shanghai 201204, China'    },
              { title: 'Metro Line 8',       detail: 'Shibo Avenue Station (15 min walk)'          },
              { title: 'October 5–9, 2026', detail: 'Tutorial on Day 1 (Oct 5), morning session'  },
            ].map(fact => (
              <div key={fact.title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                  <svg width="15" height="15" stroke="#00d4ff" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div className="text-[13px] text-muted leading-relaxed">
                  <strong className="text-[#f0f6ff] font-medium">{fact.title}</strong><br />{fact.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="relative bg-[#061428]/80 border border-[#00d4ff]/12 rounded-[10px] h-[280px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[1, 2, 3].map(n => (
              <span key={n} className="ring-pulse absolute" style={{ animationDelay: `${n - 1}s` }} />
            ))}
            <span className="relative z-10 w-3.5 h-3.5 rounded-full bg-[#00d4ff]" style={{ boxShadow: '0 0 16px #00d4ff' }} />
          </div>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="font-mono text-[11px] text-dimmed">Shanghai, Pudong</p>
            <p className="font-mono text-[10px] text-dimmed/60">31.2304° N, 121.4737° E</p>
          </div>
        </div>
      </div>
    </section>
  );
}