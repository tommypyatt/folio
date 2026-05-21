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
        ink: '#4ade80',
        muted: '#4a4840',
        accent: '#7ab896',
      },
      fontFamily: {
        editor: ['"Courier Prime"', 'Courier', 'monospace'],
        ui: ['"EB Garamond"', 'Georgia', 'serif'],
        lora: ['"Lora"', 'Georgia', 'serif'],
        libre: ['"Libre Baskerville"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
