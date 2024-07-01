module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage-green': '#7CAA96',
      },
      maxWidth: {
        'layout': '1452px',
      },
      height: {
        'top-header': '22px',
        'nav-bar': '31px',
      },
      padding: {
        'logo-y': '8px',
        'logo-left': '29px',
      },
    },
  },
  plugins: [],
};
