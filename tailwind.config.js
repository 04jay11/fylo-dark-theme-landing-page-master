/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlueIntroEmail: "hsl(217, 28%, 15%)",
darkBlueMainBg: "hsl(218, 28%, 13%)",
darkBlueFooter: "hsl(216, 53%, 9%)",
darkBlueTestimonials: "hsl(219, 30%, 18%)",
cyanCta: "hsl(176, 68%, 64%)",
blueCta: "hsl(198, 60%, 50%)",
lightRed: "hsl(0, 100%, 63%)",
whiteTxt: "hsl(0, 0%, 100%)",
      }
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
    }
  },
  plugins: [],
}

