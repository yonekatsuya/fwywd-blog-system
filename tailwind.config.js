module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/image/hero.png')",
        'hero-back': "url('/image/bg-hero.png')",
        future: "url('/image/future.png')",
      },
      colors: {
        'base-green': '#2bb9ba',
        'thin-green': '#6bc2c3',
        'base-black': '#262c3a',
      },
    },
  },
  plugins: [],
};
