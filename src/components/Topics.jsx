import { topics } from '@/app/data/topics';

export default function Topics() {
  return (
    <section id="topics" className="max-w-[1100px] mx-auto px-6 py-24">
      <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">// tutorial topics</p>
      <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-10">What You'll Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map(topic => (
          <div key={topic.num}
            className="group relative bg-[#061428]/90 border border-[#1a6aff]/20 rounded-[10px] p-6 overflow-hidden transition-all duration-300 hover:border-[#00d4ff]/50 hover:-translate-y-0.5 card-top-border">
            <p className="font-mono text-[10px] text-dimmed tracking-[0.1em] mb-2">{topic.num} —</p>
            <h3 className="font-head font-semibold text-[1rem] text-[#f0f6ff] mb-2 leading-snug">{topic.title}</h3>
            <p className="text-[13px] text-muted leading-[1.7]">{topic.description}</p>
            <span className="inline-block mt-4 font-mono text-[10px] bg-[#1a6aff]/15 border border-[#1a6aff]/25 text-[#4d8eff] px-2.5 py-0.5 rounded-full">
              {topic.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}