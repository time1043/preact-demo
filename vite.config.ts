import babel from "@rolldown/plugin-babel";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // vite 8 rolldown
    babel({
      plugins: [["module:@preact/signals-react-transform"]],
    }),

    // // vite 7 rollup
    // react({
    //   babel: {
    //     plugins: ["@preact/signals-react-transform"],
    //   },
    // }),
  ],
});
