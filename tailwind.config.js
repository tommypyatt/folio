/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      fontSize: {
        writing: ['18px', { lineHeight: '1.85' }],
      },
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        editor: ['"Courier Prime"', 'Courier', 'monospace'],
        ui: ['"EB Garamond"', 'Georgia', 'serif'],
        lora: ['"Lora"', 'Georgia', 'serif'],
        libre: ['"Libre Baskerville"', 'Georgia', 'serif'],
        caveat: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
