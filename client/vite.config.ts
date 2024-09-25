import { defineConfig } from "vitest/config";
import solidPlugin from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin()],
  test: {
    environment: "jsdom",
    testTransformMode: {
      web: [/\.[jt]sx?$/].map((regex) => regex.source), // RegExp を string に変換
    },
    deps: {
      inline: [/solid-js/, /solid-testing-library/],
    },
  },
  ssr: {
    noExternal: ["@kobalte/core", "@macaron-css/solid"],
  },
});
