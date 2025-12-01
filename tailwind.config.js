/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Inter Tight"', 'sans-serif'],
        'subtitle': ['"Space Grotesk"', 'sans-serif'],
        'body': ['"Space Grotesk"', 'sans-serif'],
        'sans': ['"Space Grotesk"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Primary colors
        'dark-bg': '#000000',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',

        // Gradient colors
        'gradient-blue-light': '#6CDCFF',
        'gradient-blue-dark': '#2054A8',

        // Primary Blue shades (bleu dur)
        'primary-blue': '#1e40af',
        'primary-blue-light': '#3b82f6',
        'primary-blue-dark': '#1e3a8a',

        // Accent Violet shades
        'accent-violet': '#7c3aed',
        'accent-violet-light': '#a855f7',
        'accent-violet-dark': '#5b21b6',

        // White variations
        'white-pure': '#ffffff',
        'white-soft': '#f8fafc',

        // Functional colors (keep existing)
        'accent': '#14b8a6',
        'accent-light': '#2dd4bf'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ffffff 0%, #6CDCFF 33%, #2054A8 66%, #000000 100%)',
        'custom-gradient-vertical': 'linear-gradient(to bottom, #ffffff 0%, #6CDCFF 33%, #2054A8 66%, #000000 100%)',
      }
    },
  },
  plugins: [],
}
