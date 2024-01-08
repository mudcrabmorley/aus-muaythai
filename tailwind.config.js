import tailwindcss from "tailwindcss";

const config = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url('/img/action-bg-desktop.webp')",
      }),
    },
  },
  plugins: [tailwindcss],
};

export default config;
