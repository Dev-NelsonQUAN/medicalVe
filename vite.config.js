// tailwind.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// tailwind.config.js (separate file)
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         primary: "var(--primary-color)",
//         secondary: "var(--secondary-color)",
//       },
//       fontFamily: {
//         poppins: ["var(--font-Poppins)", "sans-serif"],
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };