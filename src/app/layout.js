import './globals.css';

export const metadata = {
  title: 'Quantum & Pervasive Computing Tutorial — UbiComp 2026',
  description: 'A half-day tutorial at ACM UbiComp 2026 bridging quantum information science with ubiquitous and pervasive computing. Shanghai, October 2026.',
  keywords: ['quantum computing','pervasive computing','ubiquitous computing','UbiComp 2026','Shanghai'],
  openGraph: {
    title: 'Quantum & Pervasive Computing Tutorial — UbiComp 2026',
    description: 'Half-day tutorial at UbiComp 2026, Shanghai.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navy text-[#f0f6ff] font-body antialiased">
        {children}
      </body>
    </html>
  );
}