/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1220',
          900: '#111A2E',
          850: '#15223C',
          800: '#1C2C4E',
          700: '#273C6A',
          600: '#3A548E',
          500: '#4F6FA8',
          100: '#E7EDF7',
          50: '#F4F7FB',
        },
        gold: {
          50: '#FAF6ED',
          100: '#F5ECDB',
          200: '#EBD8B6',
          300: '#DEC08C',
          400: '#D1A964',
          500: '#C2933E', // Primary sacred gold
          600: '#A4792C',
          700: '#845E1E',
          800: '#674716',
          900: '#4D3410',
        },
        stone: {
          50: '#FAF9F6', // Altar linen / warm cream
          100: '#F4F1EA',
          150: '#ECE7DC',
          200: '#E2DBD0',
          300: '#CEC3B2',
          400: '#B0A28E',
          500: '#8E7F6B',
          600: '#6E6252',
          700: '#52493D',
          800: '#38322A',
          900: '#231F1A',
          950: '#171411',
        },
        olive: {
          50: '#F5F6F3',
          100: '#E8EBE4',
          700: '#4B5543',
          800: '#3B4434',
          900: '#282F23',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(42, 38, 31, 0.05), 0 1px 2px rgba(42, 38, 31, 0.08)',
        'warm-md': '0 4px 16px -2px rgba(42, 38, 31, 0.08), 0 2px 6px -2px rgba(42, 38, 31, 0.04)',
        'warm-lg': '0 12px 32px -4px rgba(42, 38, 31, 0.12), 0 4px 12px -2px rgba(42, 38, 31, 0.06)',
        'warm-xl': '0 24px 48px -12px rgba(42, 38, 31, 0.16)',
        'gold-glow': '0 0 24px -2px rgba(194, 147, 62, 0.28)',
      },
      transitionTimingFunction: {
        'apple-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'apple-in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      }
    },
  },
  plugins: [],
}
