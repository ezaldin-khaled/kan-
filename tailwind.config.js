/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#92a4ff",
        "brand-purple": "#b890f4",
        "brand-blue": "#92a4ff",
        "brand-lavender": "#c4a4ff",
        background: "#f0f0f0",
        surface: "#f0f0f0",
        "on-surface": "#0f0f0f",
        "on-surface-variant": "#4c4546",
        "on-primary": "#f0f0f0",
        "on-secondary": "#0f0f0f",
        outline: "#7e7576",
        "outline-variant": "#cfc4c5",
        "surface-container": "#e8e8e8",
        "surface-container-low": "#ececec",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #b890f4 0%, #92a4ff 100%)",
        "brand-gradient-subtle":
          "linear-gradient(135deg, rgba(184, 144, 244, 0.15) 0%, rgba(146, 164, 255, 0.15) 100%)",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "section-gap": "160px",
        "container-max": "1280px",
        "margin-mobile": "24px",
        "stack-md": "16px",
        gutter: "32px",
        "section-gap-mobile": "80px",
        "stack-sm": "8px",
        "stack-lg": "32px",
        "margin-desktop": "64px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontFamily: {
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "display-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "body-md": ["Inter", "sans-serif"],
        "headline-xl": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"],
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "display-lg-mobile": [
          "48px",
          {
            lineHeight: "52px",
            letterSpacing: "-0.02em",
            fontWeight: "800",
          },
        ],
        "label-caps": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.1em",
            fontWeight: "500",
          },
        ],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-xl": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-lg": [
          "84px",
          {
            lineHeight: "92px",
            letterSpacing: "-0.04em",
            fontWeight: "800",
          },
        ],
      },
    },
  },
  plugins: [],
};
