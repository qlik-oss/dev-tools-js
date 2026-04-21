import { describe, expect, it } from "vitest";
import { ESLint } from "eslint";
import qlikEslint from "../index.js";

describe("qlik-eslint", () => {
  it("should export a base config", () => {
    const base = qlikEslint.configs.recommended;
    expect(base[0]).toHaveProperty("rules");
  });

  it("should resolve TypeScript vitest imports without resolver interface errors", async () => {
    const eslint = new ESLint({
      overrideConfig: qlikEslint.configs.recommended,
      overrideConfigFile: true,
      cwd: process.cwd(),
    });

    const [result] = await eslint.lintFiles(["src/__tests__/fixtures/vitest.setup.ts"]);

    const messages = result.messages.map((message) => message.message);

    expect(messages).not.toContainEqual(expect.stringContaining("invalid interface loaded as resolver"));
    expect(messages).not.toContainEqual(expect.stringContaining("Resolve error"));
    expect(messages).not.toContainEqual(expect.stringContaining("Unable to resolve path to module 'vitest'"));
    expect(messages).not.toContainEqual(
      expect.stringContaining("Unable to resolve path to module '@vitest/eslint-plugin'"),
    );
  });
});
