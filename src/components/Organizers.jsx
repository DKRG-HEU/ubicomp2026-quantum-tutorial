const organizers = [
  {
    initials: 'MY',
    name: 'Prof. Moustafa Youssef',
    affiliation: 'American University in Cairo, New Cairo, Egypt',
    email: 'moustafa.youssef@aucegypt.edu',
  },
  {
    initials: 'WL',
    name: 'Prof. Wei Li',
    affiliation: 'Harbin Engineering University, Harbin, China',
    email: 'wei.li@hrbeu.edu.cn',
  },
  {
    initials: 'RY',
    name: 'Prof. Rahul Yadav',
    affiliation: 'Harbin Engineering University, Harbin, China',
    email: 'rahul@hrbeu.edu.cn',
  },
];
export default function Organizers() {
  return (
    <section id="organizers" className="max-w-[1100px] mx-auto px-6 py-24">
      <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">// organizers</p>
      <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-10">Tutorial Organizers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {organizers.map(org => (
          <div key={org.name} className="bg-[#061428]/80 border border-[#00d4ff]/10 rounded-[10px] p-5 flex items-center gap-4 transition-colors duration-200 hover:border-[#00d4ff]/35">
            <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#0a1e35] to-[#1a6aff]/40 border border-[#00d4ff]/25 font-head font-bold text-[1rem] text-[#88b8ff]">
              {org.initials}
            </div>
            <div>
              <p className="font-head font-semibold text-[0.88rem] text-[#f0f6ff]">{org.name}</p>
              <p className="text-[12px] text-muted mt-0.5">{org.affiliation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}