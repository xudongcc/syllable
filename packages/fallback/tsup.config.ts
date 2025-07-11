import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src", "!**/*.d.ts", "!**/*.spec.ts"],
  clean: true,
  target: "es2022",
  dts: true,
  sourcemap: true,
  format: ["cjs", "esm"],
});
