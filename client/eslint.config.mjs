import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});



// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];


const eslintConfig = [
  // Ignore build output and dependencies
  {
    ignores: ["**/.next/**", "**/node_modules/**"],
  },

  // Load Next.js and TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
