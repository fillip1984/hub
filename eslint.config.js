import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const nextEslint10 = nextVitals.map((config) => ({
  ...config,
  rules: Object.fromEntries(
    Object.entries(config.rules ?? {}).filter(
      ([rule]) =>
        !rule.startsWith("react/") && !rule.startsWith("react-hooks/"),
    ),
  ),
}));

const eslintConfig = [...nextEslint10, ...nextTypescript];

export default eslintConfig;
