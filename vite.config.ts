import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import license from "rollup-plugin-license";

const licenseBanner = `
React Lang Selecta
@copyright 🄯 2023 Marc Abonce Seguin
@license LiLiQ-R-1.1
`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  build: {
    target: "es6",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      plugins: [
        license({
          banner: {
            commentStyle: "ignored",
            content: licenseBanner,
          },
        }),
      ],
    },
  },
});
