/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      fontSize: {
        writing: ['18px', { lineHeight: '1.85' }],
      },
      colors: {
        background: '#0d0d0b',
        surface: '#111110',
        ink: '#e8e0d0',
        muted: '#4a4840',
        accent: '#c8a96e',
      },
      fontFamily: {
        editor: ['"Courier Prime"', 'Courier', 'monospace'],
        ui: ['"EB Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
