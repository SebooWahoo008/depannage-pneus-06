/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        white: '#ffffff',
        dark: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#4b5563',
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#0d1117',
          950: '#030712',
        },
        accent: {
          blue: '#3b82f6',
          green: '#22c55e',
          yellow: '#eab308',
          red: '#ef4444',
          purple: '#8b5cf6',
        },
        'accent-red': '#EF4444',
        primary: '#FF6B00',
        secondary: '#2C3E50',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        modalEnter: {
          '0%': { opacity: 0, transform: 'scale(0.95) translateY(10px)' },
          '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        modalEnter: 'modalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-modern-dark-blue': 'linear-gradient(to bottom right, #1E293B, #0F172A)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-white',
    'text-white',
    'bg-primary',
    'text-primary',
    'bg-secondary',
    'text-secondary',
    'opacity-0',
    'animate-fadeIn',
    'animate-fadeInUp',
    'animate-modalEnter',
  ],
} 