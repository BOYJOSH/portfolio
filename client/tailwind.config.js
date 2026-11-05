/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#070A12',          // Deepest bluish-black
          surface: '#0B1120',     // Deep midnight navy
          card: '#0F172A',        // Slate navy card
          cardHover: '#16223D',   // Lighter card hover
          border: '#1E293B',      // Crisp dark border
          borderLight: '#334155',
          text: '#F8FAFC',
          muted: '#94A3B8',
        },
        light: {
          bg: '#F0F4FA',          // Soft icy blue
          surface: '#E2E8F0',     // Cool slate blue
          card: '#FFFFFF',        // Pure white card
          cardHover: '#F8FAFC',   // Hover card
          border: '#CBD5E1',      // Soft blue-gray border
          borderDark: '#94A3B8',
          text: '#0F172A',        // Deep navy text
          muted: '#475569',
        },
        brand: {
          cyan: '#00E5FF',
          blue: '#38BDF8',
          teal: '#2DD4BF',
          emerald: '#10B981',
          indigo: '#6366F1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
