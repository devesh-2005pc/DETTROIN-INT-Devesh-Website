/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: "#0F172A",
          blue: "#2563EB",
          sky: "#38BDF8",
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          text: "#1E293B",
          muted: "#64748B",
          success: "#22C55E",
          warning: "#F59E0B",
          accent: "#3B82F6",
          darkNavy: "#090D16"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        heading: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
        'glass-hover': '0 20px 40px -15px rgba(37, 99, 235, 0.18)',
        'card': '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 20px 40px -12px rgba(15, 23, 42, 0.12)',
        'glow': '0 0 25px rgba(56, 189, 248, 0.35)',
        'glow-blue': '0 0 35px rgba(37, 99, 235, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
