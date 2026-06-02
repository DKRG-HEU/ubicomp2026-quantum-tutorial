/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#020b1a',
          2: '#061428',
          3: '#0a1e35',
        },
        quantum: {
          blue:  '#1a6aff',
          blue2: '#4d8eff',
          blue3: '#88b8ff',
          cyan:  '#00d4ff',
          cyan2: '#7ee8ff',
        },
        muted:  '#8aadcc',
        dimmed: '#3a5a7a',
      },
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'grid-pulse':    'gridPulse 8s ease-in-out infinite',
        'orbit':         'orbit 15s linear infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'ring-pulse':    'ringPulse 3s ease-out infinite',
      },
      keyframes: {
        gridPulse:    { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
        orbit:        { '0%': { transform: 'translate(0,0)' }, '25%': { transform: 'translate(30px,-20px)' }, '50%': { transform: 'translate(60px,10px)' }, '75%': { transform: 'translate(20px,30px)' }, '100%': { transform: 'translate(0,0)' } },
        scrollBounce: { '0%,100%': { transform: 'rotate(45deg) translate(0,0)' }, '50%': { transform: 'rotate(45deg) translate(3px,3px)' } },
        ringPulse:    { '0%': { width: '14px', height: '14px', opacity: '1' }, '100%': { width: '80px', height: '80px', opacity: '0' } },
      },
    },
  },
  plugins: [],
};