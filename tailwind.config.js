module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#3490dc",
      secondary: "#D8E9A8",
      danger: "#e3342f",
      back: "#191A19",
      solana: "#16f195",
      text: "#bec2c5",
      yellow: "#febb00",
    },
    gradientColorStops: {
      primary: "#1E5128",
      secondary: "#ffed4a",
      danger: "#e3342f",
      solana: "#16f195",
      back: "#081b24",
      whiteAplha: "#f8f8fa",
    },
    maxWidth: {
      "1/10": "6%",
      "1/6": "16%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "9/10": "90%",
    },
    maxHeight: {
      0: "0",
      "1/10": "6%",
      "1/6": "16%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },

    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "8/10": "80%",
      "8.5/10": "85",
      "9/10": "90%",
      full: "100%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
