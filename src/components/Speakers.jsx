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


import { speakers } from '@/app/data/speakers';

export default function Speakers() {
  return (
    <section id="speakers" className="max-w-[1100px] mx-auto px-6 py-24">
      
      <p className="font-mono text-[11px] text-[#00d4ff] tracking-[0.18em] uppercase mb-3">
        // speakers
      </p>

      <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.2] mb-10">
        Featured Presenters
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {speakers.map(speaker => (
          <div
            key={speaker.name}
            className="bg-[#061428]/90 border border-[#00d4ff]/10 rounded-[10px] p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#00d4ff]/40 hover:-translate-y-0.5"
          >

            {/* AVATAR SECTION */}
            <div className="flex items-center gap-4">

              {speaker.image ? (
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#00d4ff]/30"
                />
              ) : (
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0a1e35] to-[#1a6aff]/40 border-2 border-[#00d4ff]/30 font-head font-extrabold text-[1.3rem] text-[#00d4ff]">
                  {speaker.initials}
                </div>
              )}

              <div>
                <p className="font-head font-bold text-[1rem] text-[#f0f6ff]">
                  {speaker.name}
                </p>
                <p className="font-mono text-[11px] text-[#00d4ff] mt-0.5">
                  {speaker.role}
                </p>
              </div>

            </div>

            {/* AFFILIATION */}
            <p className="text-[13px] text-muted mt-1">
              {speaker.affiliation}
            </p>

            {/* BIO */}
            <p className="text-[13px] text-muted leading-[1.7] flex-1">
              {speaker.bio}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-1.5">
              {speaker.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[10px] bg-[#00d4ff]/8 border border-[#00d4ff]/15 text-[#7ee8ff] px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}