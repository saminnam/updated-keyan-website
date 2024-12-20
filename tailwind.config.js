/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/common-bg.png')",
        "bg-hero-pattern": "url('./assets/bg-hero.png')",
        "webservice-pattern": "url('./assets/web-service-bg.png')",
        "service-pattern": "url('./assets/bg-service.png')",
        "common-pattern": "url('./assets/hero.png')",
        "footer-pattern": "url('./assets/footer.png')",
        "choose-pattern": "url('./assets/choose.jpg')",
        "card-pattern": "url('./assets/card-bg.png')",
        "info-pattern": "url('./assets/info-card.png')",
      },
    },
  },
  plugins: [],
};
