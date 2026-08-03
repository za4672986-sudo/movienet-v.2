import type { Config } from "tailwindcss";

const config: Config = {

  content: [

    "./app/**/*.{ts,tsx}",

    "./components/**/*.{ts,tsx}"

  ],

  theme: {

    extend: {

      colors: {

        primary: "#E50914",

        dark: "#090909",

        secondary: "#181818"

      },

      borderRadius: {

        xl: "20px"

      }

    }

  },

  plugins: []

};

export default config;
