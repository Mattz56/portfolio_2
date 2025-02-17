import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: "greenhaze",
        greenhaze:{
          50: "#effaf3",
          100: "#d9f2e1",
          200: "#b6e4c8",
          300: "#86cfa7",
          400: "#53b483",
          500: "#319867",
          600: "#217a51",
          700: "#1b6143",
          800: "#174e36",
          900: "#14402e",
          950: "#0a241a"
        }
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    }
  }
}