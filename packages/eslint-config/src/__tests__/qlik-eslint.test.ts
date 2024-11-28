import { describe, expect, it } from "vitest";
import qlikEslint from "../index.js";

describe("qlik-eslint", () => {
  it("should export a base config", () => {
    const base = qlikEslint.configs.recommended;
    expect(base[0]).toHaveProperty("rules");
  });

  it("should support extend property", () => {
    const config = qlikEslint.compose(
      // adds the base config for both JS and TS
      {
        extend: [...qlikEslint.configs.vitest],
        rules: {
          "vitest/expect-expect": "warn", // TODO should be ERROR
          "testing-library/render-result-naming-convention": "warn", // TODO should be ERROR
        },
      },
      {
        rules: {
          "no-undef": "off",
          "no-console": "off",
          "no-magic-numbers": "off",
          "@typescript-eslint/no-magic-numbers": "off",
        },
      },
    );
    expect(config.length).toBe(2);
    expect(config[0]).toHaveProperty("rules");
    expect(config[0].rules?.["testing-library/render-result-naming-convention"]).toBe("warn");
  });
});
