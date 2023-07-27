/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        main: {
          50: '#edfffb',
          100: '#dafff6',
          200: '#b5ffed',
          300: '#91ffe6',
          400: '#6cffdd',
          500: '#47ffd4',
          600: '#41ebc3',
          700: '#31af91',
          800: '#268770',
          900: '#1b5f4f',
          950: '#0c2822'
        }
      }
    },
    fontFamily: {
      'sans': ['Assistant', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"']
    }
  },
  plugins: [],
}

