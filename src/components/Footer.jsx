const links = [
  '#overview','#topics','#speakers','#schedule','#venue','#contact'
].map(href => ({ href, label: href.replace('#','').replace(/^\w/, c => c.toUpperCase()) }));

export default function Footer() {
  return (
    <footer className="border-t border-[#00d4ff]/10 py-12 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="font-mono text-[13px] text-[#00d4ff] mb-4">QPC://UbiComp26</p>
        <p className="font-mono text-[11px] text-dimmed leading-[1.9]">
          Quantum &amp; Pervasive Computing Tutorial · UbiComp 2026<br />
          October 11-12, 2026 · Shanghai, China
        </p>
        <div className="flex gap-6 justify-center flex-wrap mt-5">
          {links.map(link => (
            <a key={link.href} href={link.href}
              className="font-mono text-[11px] text-dimmed hover:text-[#00d4ff] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-mono text-[10px] text-dimmed/50 mt-8">
          © 2026 UbiComp Tutorial Organizers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}