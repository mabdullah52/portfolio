import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        surface: "#121820",
        "surface-raised": "#171F29",
        ink: "#E8ECEF",
        muted: "#8B96A3",
        signal: "#F2B84B",
        "signal-dim": "#7A5B22",
        line: "#3D5A73",
      },
      fontFamily: {
        display: [
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        body: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "Menlo",
          "monospace",
        ],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(11,15,20,1))",
      },
      keyframes: {
        "pulse-signal": {
          "0%, 100%": { opacity: "0.4", r: "3" },
          "50%": { opacity: "1", r: "5" },
        },
        flow: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "pulse-signal": "pulse-signal 2.4s ease-in-out infinite",
        flow: "flow 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
