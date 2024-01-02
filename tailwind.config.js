import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        primary: 'rgb(112, 185, 102)',
        secondary: 'rgb(255, 204, 3)'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        firaCode: ['Fira Code', 'monospace']
      },
    }
  }
}