import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "neon-text-cyan",
    "neon-text-magenta",
    "neon-text-green",
    "neon-border-cyan",
    "neon-border-magenta",
    "neon-glow-cyan",
    "neon-glow-magenta",
    "cyber-card",
    "glitch-text",
    "cursor",
    "font-orbitron",
    "font-mono-tech",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "Orbitron", ...fontFamily.sans],
        "mono-tech": [
          "var(--font-share-tech-mono)",
          "Share Tech Mono",
          ...fontFamily.mono,
        ],
        body: ["var(--font-exo2)", "Exo 2", ...fontFamily.sans],
      },
      colors: {
        cyber: {
          black: "#050510",
          dark: "#0a0a1a",
          gray: "#111128",
          border: "#1a1a3a",
        },
        neon: {
          cyan: "#00ffff",
          magenta: "#ff00ff",
          green: "#00ff41",
          yellow: "#ffd700",
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 10px #00ffff, 0 0 20px #00ffff40, 0 0 40px #00ffff20",
        "neon-magenta":
          "0 0 10px #ff00ff, 0 0 20px #ff00ff40, 0 0 40px #ff00ff20",
        "neon-green": "0 0 10px #00ff41, 0 0 20px #00ff4140",
        "neon-cyan-sm": "0 0 5px #00ffff, 0 0 10px #00ffff40",
        "neon-magenta-sm": "0 0 5px #ff00ff, 0 0 10px #ff00ff40",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
        flicker: "flicker 4s linear infinite",
        "slide-in": "slide-in 0.6s ease-out",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 89%, 95%, 100%": { opacity: "1" },
          "90%": { opacity: "0.7" },
          "92%": { opacity: "0.9" },
          "93%": { opacity: "0.6" },
          "96%": { opacity: "0.85" },
        },
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
