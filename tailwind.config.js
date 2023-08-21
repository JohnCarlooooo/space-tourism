/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkBlue: "#0B0D17",
        LightBlue: "#D0D6F9",
      },
      fontFamily: {
        bellefair: ["var(--font-bellefair)"],
        barlow: ["var(--font-barlow)"],
        barlowCondensed: ["var(--font-barlowCondensed)"],
      },
      backgroundImage: {
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",

        "destination-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",

        "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/crew/background-crew-desktop.jpg')",

        "technology-mobile":
          "url('/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/technology/background-technology-desktop.jpg')",
      },
      screens: {
        tablet: "768px ",
        desktop: "1440px  ",
      },
    },
  },
  plugins: [],
};
