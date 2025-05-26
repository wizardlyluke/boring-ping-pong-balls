import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff10f0',
        'neon-blue': '#0ff0fc',
        'neon-purple': '#bf00ff',
        'neon-green': '#39ff14',
        'neon-orange': '#ff6600',
        'dark-purple': '#1a0033',
        'dark-blue': '#000033',
        'retro-black': '#0a0a0a',
        'grid-purple': '#330066',
        'glow-pink': '#ff69b4',
        'glow-cyan': '#00ffff',
      },
      fontFamily: {
        'retro': ['Orbitron', 'monospace'],
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scan-line 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #ff10f0, 0 0 10px #ff10f0, 0 0 15px #ff10f0',
            boxShadow: '0 0 5px #ff10f0'
          },
          '100%': { 
            textShadow: '0 0 10px #ff10f0, 0 0 20px #ff10f0, 0 0 30px #ff10f0',
            boxShadow: '0 0 10px #ff10f0, 0 0 20px #ff10f0'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'retro-grid': `
          linear-gradient(rgba(255, 16, 240, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 16, 240, 0.3) 1px, transparent 1px)
        `,
        'synthwave-gradient': 'linear-gradient(45deg, #1a0033, #000033, #330066)',
        'neon-gradient': 'linear-gradient(45deg, #ff10f0, #0ff0fc, #bf00ff)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
} satisfies Config; 