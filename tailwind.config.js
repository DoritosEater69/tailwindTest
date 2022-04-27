module.exports = {
  purge: ['./public/**/*.html'],
  content: [],
  theme: {
    extend: {
      animation: {
        inputs: "inputs 3s infinite",
        headline: "headline 6s infinite",
      },

      keyframes: {
        inputs: {
          "0%": {
            transform: "scale(1)",     
            opacity: "1",
          },
          "33%": {
            transform: "scale(1.1)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },

        headline: {
          "0%": {
            opacity: "1",
          },
          "33%": {
            opacity: "0.4",
            color: "white",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        'cam-guy': 'url(./bg-camera-guy.jpg)'
      }
    },
  },
  plugins: [],
}
