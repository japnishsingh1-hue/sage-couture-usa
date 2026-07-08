import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FEFDFB',
          100: '#FFFBF5',
          200: '#FFF8ED',
          300: '#FFF3E0',
          400: '#FFEAD0',
          500: '#FFF0D9',
          600: '#F5E6D3',
          700: '#E8D5C4',
          800: '#D4BFA8',
          900: '#C4AA94',
        },
        champagne: {
          50: '#FFFEF9',
          100: '#FFFCF5',
          200: '#FFFAF0',
          300: '#FFF6E6',
          400: '#FFE6B0',
          500: '#E8D4B0',
          600: '#D4B896',
          700: '#C4A878',
          800: '#A89160',
          900: '#8C7548',
        },
        'warm-beige': {
          50: '#FEFAF5',
          100: '#FEF6F0',
          200: '#FCF1E8',
          300: '#F5E8DC',
          400: '#E8DCC8',
          500: '#E0D5C7',
          600: '#D4C4B0',
          700: '#BFA896',
          800: '#A89680',
          900: '#8C7A68',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        'luxury-xs': ['0.75rem', { lineHeight: '1rem' }],
        'luxury-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'luxury-base': ['1rem', { lineHeight: '1.5rem' }],
        'luxury-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'luxury-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'luxury-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'luxury-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'luxury-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'luxury-5xl': ['3rem', { lineHeight: '1' }],
        'luxury-6xl': ['3.75rem', { lineHeight: '1' }],
        'luxury-7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        'luxury-xs': '0.5rem',
        'luxury-sm': '1rem',
        'luxury-md': '1.5rem',
        'luxury-lg': '2rem',
        'luxury-xl': '2.5rem',
        'luxury-2xl': '3rem',
        'luxury-3xl': '4rem',
        'luxury-4xl': '5rem',
      },
      letterSpacing: {
        'luxury': '0.08em',
        'luxury-tight': '-0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-gentle': 'pulseGentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
