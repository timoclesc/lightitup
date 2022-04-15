module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Amatic SC', 'cursive'],
      sans: ['Andika', 'arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'just-right': '#DEC5B4',
        'silver': '#C4C4C4',
        'wild-blue-yonder': '#758EBB',
        'fun-blue': '#324C83',
        'edgewater': '#C1D9CC',
        'sandrift': '#AE967A',
        'pinecone': '#716556',
        'gunpowder': '#4A4555',
        'signal-beam': '#FFF5C1',
        'white': '#ffffff',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
