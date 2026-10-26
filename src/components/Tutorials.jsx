
'use client';

const BASE_PATH =
  process.env.NODE_ENV === 'production'
    ? '/ioscforum_iosc-2026'
    : '';

const tutorials = [
  {
    number: '01',
    title: 'Quantum Computing',
    description:
      'Quantum Computing for Ubiquitous and Pervasive Computing Systems',
    filename: 'Ubicomp26_tutorial.pdf',
    category: 'PDF RESOURCE',
  },
  {
    number: '02',
    title: 'Hands-on Lab: Quantum Computing for Ubiquitous and Pervasive Computing Systems',
    description:
      'Hands-on Lab: Quantum Computing for Ubiquitous and Pervasive Computing Systems',
    filename: 'Ubicomp26_hand_on_lab.pdf',
    category: 'PDF RESOURCE',
  },
];

export default function Tutorials() {
  return (
    <section
      id="tutorials"
      className="relative overflow-hidden border-y border-[#00d4ff]/10
                 bg-[#061428]/80 px-6 py-20 md:py-28"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -right-32 top-10
                   h-80 w-80 rounded-full bg-[#00d4ff]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-[#00d4ff]">
            LEARNING RESOURCES / 02
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Tutorials<span className="text-[#00d4ff]"> &amp; PDFs</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            Explore our tutorial materials. Read each PDF online or
            download it for offline learning and reference.
          </p>
        </div>

        {/* Tutorial cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {tutorials.map((tutorial) => {
            const pdfUrl =
              `${BASE_PATH}/tutorials/${tutorial.filename}`;

            return (
              <article
                key={tutorial.number}
                className="group relative rounded-2xl border
                           border-[#00d4ff]/15 bg-[#091b31]/80 p-6
                           transition-all duration-300
                           hover:-translate-y-1 hover:border-[#00d4ff]/50
                           hover:shadow-xl hover:shadow-[#00d4ff]/5
                           md:p-8"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center
                               rounded-xl border border-[#00d4ff]/20
                               bg-[#00d4ff]/10 font-mono text-sm
                               font-bold text-[#00d4ff]"
                  >
                    PDF
                  </div>

                  <span className="font-mono text-3xl font-bold text-white/10">
                    {tutorial.number}
                  </span>
                </div>

                <p className="mt-7 font-mono text-[10px] tracking-[0.2em] text-[#00d4ff]">
                  {tutorial.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                  {tutorial.title}
                </h3>

                <p className="mt-3 min-h-14 text-sm leading-7 text-slate-400">
                  {tutorial.description}
                </p>

                {/* Action buttons */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg
                               border border-[#00d4ff]/30 px-4 py-3
                               font-mono text-xs text-[#00d4ff]
                               transition hover:bg-[#00d4ff]/10"
                  >
                    Read PDF
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={pdfUrl}
                    download={tutorial.filename}
                    className="inline-flex items-center gap-2 rounded-lg
                               bg-[#00d4ff] px-4 py-3 font-mono
                               text-xs font-bold text-[#061428]
                               transition hover:bg-cyan-200"
                  >
                    Download
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px
                                bg-gradient-to-r from-transparent
                                via-[#00d4ff]/30 to-transparent
                                opacity-0 transition group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        <p className="mt-8 font-mono text-[10px] tracking-wider text-slate-500">
          OPEN ACCESS · PDF FORMAT · READ ONLINE OR SAVE FOR OFFLINE USE
        </p>
      </div>
    </section>
  );
}
