import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src", "!**/*.d.ts", "!**/*.spec.ts"],
  clean: true,
  dts: true,
  sourcemap: true,
  target: "es2022",
  format: ["cjs", "esm"],
});
