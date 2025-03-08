module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#05080F',       /* Azul oscuro casi negro */
        secondary: '#2c3e50',     /* Azul grisáceo elegante */
        tertiary: '#0a1d37',      /* Azul profundo con un toque de violeta */
        'black-100': '#0b0f1a',   /* Negro azulado sutil */
        'black-200': '#040814',   /* Negro más profundo con un matiz azul */
        'white-100': '#e0f7ff',   /* Azul muy claro casi blanco, para contraste */
        customBlue: '#07537A',
      },
      boxShadow: {
        card: '0 35px 120px -15px #1F2936',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
};
