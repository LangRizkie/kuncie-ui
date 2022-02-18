module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      width: {
        'min': 'min-content',
        'max': 'max-content',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '976px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px'
      },
      colors: {
        'purple-dark': '#2C1A32'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-bg-patterns')
  ]
}
