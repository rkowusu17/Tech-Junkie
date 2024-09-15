/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      keyframes: {
        "Float-in": {
          "0%": { tramsform: "translateX(-200x) ", opacity: " 0%  " },
          "30%": {
            tramsform: "translateX(-150px)",
            opacity: "40%",
          },
          "60%": {
            tramsform: "translateX(-100px)",
            opacity: "75%",
          },
          "90%": {
            transform: "traslateX(-10px)",
            opacity: "90%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
      animation: {
        "Float-in": "Float-in 3s ",
      },
    },
  },
  plugins: [],
};
