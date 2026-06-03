const stats = [
  { num: '4h', label: 'Duration' },
  { num: '6', label: 'Topic Modules' },
  { num: '3', label: 'Speakers' },
  { num: '∞', label: 'Curiosity Required' },
];


export default function Overview() {
  return (
    <section id="overview" className="max-w-[1100px] mx-auto px-6 py-24">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>

          {/* ABSTRACT */}
          <p className="font-mono text-[10px] text-[#00d4ff] tracking-[0.2em] uppercase mb-3">
            Abstract
          </p>

          <h2 className="font-head font-semibold text-[clamp(1.6rem,2.5vw,2.4rem)] leading-[1.25] mb-5">
           Quantum Computing for Ubiquitous and Pervasive Computing Systems
          </h2>

          <div className="space-y-4 text-muted text-[14px] leading-[1.85] mb-8">
            <p>
              Quantum computing is an emerging field at the intersection of computer science, quantum mechanics, and mathematics; offering a
novel approach to problem-solving that enables efficient solutions
for problems intractable on classical computers. As researchers
demonstrate quantum supremacy and cloud-based quantum hardware becomes increasingly accessible, the field is transitioning
from theoretical research to practical reality. This tutorial aims to
introduce the UbiComp and ISWC community to the most general
gate-based (circuit model) quantum computing and its potential
applications within ubiquitous and pervasive computing systems
            </p>

            <p>
              on, starting with quantum computing principles—such as qubits,
gates, and circuits—and progressing to the mapping of pervasive
computing problems (e.g., localization) into quantum models. We
will discuss current challenges, including Noisy Intermediate-Scale
Quantum (NISQ) era systems, and explore future opportunities for
research. By bridging the gap between quantum algorithms and pervasive systems, this tutorial seeks to foster a new sub-community
dedicated to exploring quantum-driven innovations in ubiquitous
computing
            </p>

            <p>
              The tutorial will also include hands-on experience on Quantum
Simulators and possibly quantum cloud platforms (to be confirmed).
The tutorial will end with a discussion of open research problems
and challenges for real-world problems in the pervasive computing
domain.
            </p>
          </div>

          {/* CCS CONCEPTS */}
          {/* <p className="font-mono text-[10px] text-[#00d4ff] tracking-[0.2em] uppercase mb-3">
            CCS Concepts
          </p>

          <div className="space-y-2 text-muted text-[13px] leading-[1.7] mb-8">
             <p>•  Computer systems organization → Quantum computing</p>
              <p>• Human-centered computing → Ubiquitous and pervasive</p>
          </div> */}

          {/* KEYWORDS */}
          <p className="font-mono text-[10px] text-[#00d4ff] tracking-[0.2em] uppercase mb-3">
            Keywords
          </p>
          <div className="flex flex-wrap gap-2 text-[12px] text-muted">
            {[
              'Quantum Computing',
              'Gate-based Model',
              'Quantum Circuits',
              'Pervasive Computing',
              'Localization',
              'Mobile Systems'
            ].map(k => (
              <span
                key={k}
                className="border border-[#00d4ff]/20 px-3 py-1 rounded-full"
              >
                {k}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map(s => (
            <div
              key={s.label}
              className="bg-[#0a1e35]/80 border border-[#00d4ff]/12 rounded-[10px] p-6 text-center"
            >
              <span className="font-head font-semibold text-[1.8rem] text-[#00d4ff] block mb-1">
                {s.num}
              </span>
              <span className="font-mono text-[10px] text-muted tracking-[0.08em]">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}