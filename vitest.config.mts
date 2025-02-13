import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    dir: "tests",
    restoreMocks: true,
    coverage: {
      include: ["app/**/*"],
      reporter: ["text", "html"],
    },
    setupFiles: ["vitest-setup.ts"],
  },
});
