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
        // Gris 500 relevé : #6b7280 ne passait pas le contraste AA (4,0:1) sur fond noir.
        gray: { 500: '#8b94a3' },

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
      // Conteneur de la charte : 1280 px comme .ep-wrap du dashboard. Les pages
      // étaient bridées à 1024 px (max-w-5xl), ce qui laissait de larges bandes
      // noires de chaque côté sur un écran de bureau.
      maxWidth: {
        '5xl': '80rem',
        '6xl': '80rem',
      },
      // Charte du dashboard : angles droits, aucune ombre portée.
      // Toutes les échelles de rayon et d'ombre sont neutralisées ici pour que
      // les pages existantes s'alignent sans être modifiées une à une.
      // `full` reste disponible (avatars, pastilles).
      borderRadius: {
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        sm: 'none',
        DEFAULT: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
        '2xl': 'none',
        inner: 'none',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ffffff 0%, #6CDCFF 33%, #2054A8 66%, #000000 100%)',
        'custom-gradient-vertical': 'linear-gradient(to bottom, #ffffff 0%, #6CDCFF 33%, #2054A8 66%, #000000 100%)',
      }
    },
  },
  plugins: [],
}
