export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        card: "var(--card)",
        border: "var(--border)",
        nav: "var(--nav)",
        amazon: "var(--amazon)",
      },
    },
  },
  plugins: [],
};