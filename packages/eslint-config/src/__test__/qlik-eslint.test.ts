import { describe, expect, it } from "vitest";
import qlikEslint from "../index.js";

describe("qlik-eslint", () => {
  it("should export a base config", () => {
    const base = qlikEslint.configs.recommended;
    console.log(base);
    expect(base).toHaveProperty("rules");
  });
});
