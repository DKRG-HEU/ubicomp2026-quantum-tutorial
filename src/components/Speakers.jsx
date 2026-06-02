// import { speakers } from '@/app/data/speakers';

// export default function Speakers() {
//   return (
//     <section id="speakers" className="max-w-[1100px] mx-auto px-6 py-24">
//       <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">// speakers</p>
//       <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-10">Featured Presenters</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {speakers.map(speaker => (
//           <div key={speaker.name}
//             className="bg-[#061428]/90 border border-[#00d4ff]/10 rounded-[10px] p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#00d4ff]/40 hover:-translate-y-0.5">
//             <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0a1e35] to-[#1a6aff]/40 border-2 border-[#00d4ff]/30 font-head font-extrabold text-[1.3rem] text-[#00d4ff]">
//               {speaker.initials}
//             </div>
//             <div>
//               <p className="font-head font-bold text-[1rem] text-[#f0f6ff]">{speaker.name}</p>
//               <p className="font-mono text-[11px] text-[#00d4ff] mt-0.5">{speaker.role}</p>
//               <p className="text-[13px] text-muted mt-1">{speaker.affiliation}</p>
//             </div>
//             <p className="text-[13px] text-muted leading-[1.7] flex-1">{speaker.bio}</p>
//             <div className="flex flex-wrap gap-1.5">
//               {speaker.tags.map(tag => (
//                 <span key={tag} className="font-mono text-[10px] bg-[#00d4ff]/8 border border-[#00d4ff]/15 text-[#7ee8ff] px-2.5 py-0.5 rounded-full">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import { speakers } from '@/app/data/speakers';

// export default function Speakers() {
//   return (
//     <section id="speakers" className="max-w-[1100px] mx-auto px-6 py-24">
      
//       <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">
//         // speakers
//       </p>

//       <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-10">
//         Featured Presenters
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

//         {speakers.map(speaker => (
//           <div
//             key={speaker.name}
//             className="bg-[#061428]/90 border border-[#00d4ff]/10 rounded-[10px] p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#00d4ff]/40 hover:-translate-y-0.5"
//           >

//             {/* AVATAR SECTION */}
//             <div className="flex items-center gap-4">

//               {speaker.image ? (
//                 <img
//                   src={speaker.image}
//                   alt={speaker.name}
//                   className="w-16 h-16 rounded-full object-cover border-2 border-[#00d4ff]/30"
//                 />
//               ) : (
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0a1e35] to-[#1a6aff]/40 border-2 border-[#00d4ff]/30 font-head font-extrabold text-[1.3rem] text-[#00d4ff]">
//                   {speaker.initials}
//                 </div>
//               )}

//               <div>
//                 <p className="font-head font-bold text-[1rem] text-[#f0f6ff]">
//                   {speaker.name}
//                 </p>
//                 <p className="font-mono text-[11px] text-[#00d4ff] mt-0.5">
//                   {speaker.role}
//                 </p>
//               </div>

//             </div>

//             {/* AFFILIATION */}
//             <p className="text-[13px] text-muted mt-1">
//               {speaker.affiliation}
//             </p>

//             {/* BIO */}
//             <p className="text-[13px] text-muted leading-[1.7] flex-1">
//               {speaker.bio}
//             </p>

//             {/* TAGS */}
//             <div className="flex flex-wrap gap-1.5">
//               {speaker.tags.map(tag => (
//                 <span
//                   key={tag}
//                   className="font-mono text-[10px] bg-[#00d4ff]/8 border border-[#00d4ff]/15 text-[#7ee8ff] px-2.5 py-0.5 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }

'use client';
import { speakers } from '@/app/data/speakers';

export default function Speakers() {
  return (
    <section id="speakers" className="max-w-[1150px] mx-auto px-6 py-24">
      <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">
        // organizers
      </p>
      <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-12">
        Organizers &amp; Presenters
      </h2>
      <div className="flex flex-col gap-6">
        {speakers.map((speaker, i) => (
          <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
        ))}
      </div>
    </section>
  );
}

function SpeakerCard({ speaker, index }) {
  return (
    <div className="group bg-[#061428]/90 border border-[#00d4ff]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00d4ff]/35 hover:shadow-[0_0_40px_rgba(0,212,255,0.06)]">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">

        {/* ── Left panel ── */}
        <div className="relative flex flex-col items-center justify-start gap-4 p-8 bg-gradient-to-br from-[#0a1e35] to-[#061428] border-b md:border-b-0 md:border-r border-[#00d4ff]/10">

          {/* Index watermark */}
          <span className="absolute top-4 right-5 font-mono text-[11px] text-[#00d4ff]/20 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Avatar */}
          {speaker.image ? (
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-[#00d4ff]/30 shadow-[0_0_20px_rgba(0,212,255,0.15)]"
            />
          ) : (
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0d2545] to-[#1a6aff]/30 border-2 border-[#00d4ff]/30 font-head font-bold text-[1.6rem] text-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.1)]">
              {speaker.initials}
            </div>
          )}

          {/* Name & role */}
          <div className="text-center">
            <h3 className="font-head font-bold text-[1.05rem] text-[#f0f6ff] leading-snug mb-2">
              {speaker.name}
            </h3>
            <span className="inline-block font-mono text-[10px] px-3 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-[#00d4ff] tracking-[0.06em]">
              {speaker.role}
            </span>
          </div>

          {/* Affiliation */}
          {speaker.affiliation && (
            <p className="text-center text-[12px] text-muted leading-relaxed px-2">
              {speaker.affiliation}
            </p>
          )}

          {/* ✅ Fixed: optional chaining on email */}
          {/* {speaker.email && (
            
              href={`mailto:${speaker.email}`}
              className="font-mono text-[11px] text-[#00d4ff]/70 hover:text-[#00d4ff] transition-colors duration-200 break-all text-center"
            >
              {speaker.email}
            </a>
          )} */}
          {speaker.email && (
          <a
            href={`mailto:${speaker.email}`}
            className="font-mono text-[11px] text-[#00d4ff]/70 hover:text-[#00d4ff] transition-colors duration-200 break-all text-center"
          >
            {speaker.email}
          </a>
          )}

          {/* Tags */}
          {speaker.tags && speaker.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-1.5 pt-1">
              {speaker.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] bg-[#00d4ff]/6 border border-[#00d4ff]/12 text-[#7ee8ff] px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── Right panel ── */}
        <div className="flex flex-col gap-0 divide-y divide-[#00d4ff]/6">

          {speaker.distinctions && (
            <DetailRow label="Distinctions" icon={<StarIcon />} accent>
              {speaker.distinctions}
            </DetailRow>
          )}

          {speaker.bio && (
            <DetailRow label="Expertise" icon={<BrainIcon />}>
              {speaker.bio}
            </DetailRow>
          )}

          {speaker.quantum && (
            <DetailRow label="Quantum Experience" icon={<AtomIcon />} highlight>
              {speaker.quantum}
            </DetailRow>
          )}

          {speaker.awards && (
            <DetailRow label="Awards" icon={<TrophyIcon />}>
              {speaker.awards}
            </DetailRow>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, icon, children, accent = false, highlight = false }) {
  return (
    <div className={`flex gap-4 px-7 py-5 ${highlight ? 'bg-[#00d4ff]/[0.03]' : ''}`}>
      <div className={`mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border ${
        accent
          ? 'bg-[#fbbf24]/10 border-[#fbbf24]/20'
          : highlight
          ? 'bg-[#00d4ff]/10 border-[#00d4ff]/20'
          : 'bg-[#1a6aff]/10 border-[#1a6aff]/20'
      }`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-mono text-[10px] tracking-[0.12em] uppercase mb-1.5 ${
          accent ? 'text-[#fbbf24]' : highlight ? 'text-[#00d4ff]' : 'text-[#4d8eff]'
        }`}>
          {label}
        </p>
        <p className="text-[13px] text-muted leading-[1.75]">{children}</p>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.8">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function AtomIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8">
      <circle cx="12" cy="12" r="1" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4d8eff" strokeWidth="1.8">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.14z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.14z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4d8eff" strokeWidth="1.8">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  );
}