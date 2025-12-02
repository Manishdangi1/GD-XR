import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minecraft Official Colors - Matching minecraft.net
        mc: {
          'bg-dark': '#1a1a1a',
          'bg-darker': '#0f0f0f',
          'green': '#62b74a',
          'green-hover': '#72c75a',
          'green-dark': '#4a9a3a',
          'text-white': '#ffffff',
          'text-gray': '#b3b3b3',
          'text-dark': '#808080',
          'border-dark': '#333333',
        },
      },
      fontFamily: {
        'minecraft': ['Minecraft Ten', 'Minecraft Seven', 'monospace'],
        'noto': ['Noto Sans', 'sans-serif'],
      },
      backgroundColor: {
        'mc-dark': '#1a1a1a',
        'mc-darker': '#0f0f0f',
      },
    },
  },
  plugins: [],
};
export default config;

