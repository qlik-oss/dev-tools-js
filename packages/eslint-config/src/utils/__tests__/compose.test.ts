import { describe, expect, it } from "vitest";
import type { ESLintFlatConfig, ESLintFlatConfigWithExtend } from "../../types/index.js";
import compose from "../compose.js";

describe("compose function", () => {
  it("should return an empty array when no configs are provided", () => {
    const result = compose();
    expect(result).toEqual([]);
  });

  it("should return the same config when a single config is provided without extend", () => {
    const config: ESLintFlatConfig = { rules: { "no-console": "error" } };
    const result = compose(config);
    expect(result).toEqual([config]);
  });

  it("should merge configs with extend property correctly", () => {
    const baseConfig: ESLintFlatConfig = { rules: { "no-console": "error" } };

    const result = compose({
      extend: [baseConfig],
      rules: { "no-debugger": "warn" },
      files: ["*.js"],
    });

    expect(result).toEqual([
      { files: ["*.js"], rules: { "no-console": "error" } },
      { files: ["*.js"], rules: { "no-debugger": "warn" } },
    ]);
  });

  it("should handle multiple extends on an otherwise empty config", () => {
    const baseConfig1: ESLintFlatConfig = { rules: { "no-console": "error" } };
    const baseConfig2: ESLintFlatConfig = { rules: { "no-debugger": "warn" } };

    const result = compose({
      extend: [baseConfig1, baseConfig2],
    });

    expect(result).toEqual([{ rules: { "no-console": "error" } }, { rules: { "no-debugger": "warn" } }, {}]);
  });

  it("should throw an error if extend property is not an array", () => {
    // @ts-expect-error this is intentional
    const invalidConfig: ESLintFlatConfigWithExtend = { extend: {}, rules: { "no-console": "error" } };
    expect(() => compose(invalidConfig)).toThrow("extend property must be an array");
  });

  it("should throw an error if extend property is a string", () => {
    // @ts-expect-error this is intentional
    const invalidConfig: ESLintFlatConfigWithExtend = { extend: "someconfig", rules: { "no-console": "error" } };
    expect(() => compose(invalidConfig)).toThrow("extend property must be an array");
  });

  it("should handle multiple configs with extend properties", () => {
    const baseConfig1: ESLintFlatConfig = { rules: { "no-console": "error" } };
    const baseConfig2: ESLintFlatConfig = { rules: { "no-debugger": "warn" } };

    const result = compose(
      {
        extend: [baseConfig1],
        files: ["*.js"],
      },
      {
        extend: [baseConfig2],
        files: ["*.ts"],
      },
    );

    expect(result).toEqual([
      { rules: { "no-console": "error" }, files: ["*.js"] },
      { files: ["*.js"] },
      { rules: { "no-debugger": "warn" }, files: ["*.ts"] },
      { files: ["*.ts"] },
    ]);
  });

  it("should handle when configs have a name property", () => {
    const baseConfig1: ESLintFlatConfig = { name: "base-config-1", rules: { "no-console": "error" } };
    const baseConfig2: ESLintFlatConfig = { name: "base-config-2", rules: { "no-debugger": "warn" } };

    const result = compose(
      {
        extend: [baseConfig1],
        files: ["*.js"],
      },
      {
        extend: [baseConfig2],
        files: ["*.ts"],
      },
    );

    expect(result).toEqual([
      { name: "base-config-1", rules: { "no-console": "error" }, files: ["*.js"] },
      {
        files: ["*.js"],
      },
      { name: "base-config-2", rules: { "no-debugger": "warn" }, files: ["*.ts"] },
      {
        files: ["*.ts"],
      },
    ]);
  });

  it("should handle extending from multiple configs", () => {
    const baseConfig1: ESLintFlatConfig = { rules: { "no-console": "error" } };
    const baseConfig2: ESLintFlatConfig = { rules: { "no-debugger": "warn" } };

    const result = compose({
      extend: [baseConfig1, baseConfig2],
      files: ["*.js"],
    });

    expect(result).toEqual([
      { rules: { "no-console": "error" }, files: ["*.js"] },
      { rules: { "no-debugger": "warn" }, files: ["*.js"] },
      { files: ["*.js"] },
    ]);
  });

  it("should handle extending from configs in the array format", () => {
    const baseConfig1: ESLintFlatConfig[] = [
      { rules: { "no-console": "error" } },
      { rules: { "no-debugger": "warn" } },
    ];

    const result = compose({
      extend: [...baseConfig1],
      files: ["*.tsx"],
    });

    expect(result).toEqual([
      { rules: { "no-console": "error" }, files: ["*.tsx"] },
      { rules: { "no-debugger": "warn" }, files: ["*.tsx"] },
      { files: ["*.tsx"] },
    ]);
  });

  it("should handle multiple configs in the array format with extend properties", () => {
    const parseFn = () => "eslint";
    const baseConfig1: ESLintFlatConfig[] = [
      { languageOptions: { parser: { parse: parseFn } } },
      { rules: { "no-console": "error" }, files: ["*.js"] },
    ];
    const baseConfig2: ESLintFlatConfig[] = [{ rules: { "no-debugger": "warn" } }];

    const result = compose(
      {
        extend: [...baseConfig1],
        files: ["*.jsx"],
        rules: { "no-debugger": "off" },
      },
      {
        extend: [...baseConfig2],
        files: ["*.tsx"],
        rules: { "no-undef": "error" },
      },
    );

    expect(result).toEqual([
      {
        files: ["*.jsx"],
        languageOptions: {
          parser: {
            parse: parseFn,
          },
        },
      },
      {
        files: ["*.jsx"],
        rules: {
          "no-console": "error",
        },
      },
      {
        files: ["*.jsx"],
        rules: {
          "no-debugger": "off",
        },
      },
      {
        files: ["*.tsx"],
        rules: {
          "no-debugger": "warn",
        },
      },
      {
        files: ["*.tsx"],
        rules: {
          "no-undef": "error",
        },
      },
    ]);
  });

  it("should handle multiple nested extend properties", () => {
    const baseConfig1: ESLintFlatConfig = { rules: { "no-console": "error" } };

    const composedConfig = compose({
      extend: [baseConfig1],
      rules: { "no-debugger": "warn" },
      files: ["*.js"],
    });

    const nestedComposedConfig = compose({
      extend: [...composedConfig],
      rules: { "no-typescript": "error" },
      files: ["*.ts"],
    });

    expect(nestedComposedConfig).toEqual([
      {
        files: ["*.ts"],
        rules: {
          "no-console": "error",
        },
      },
      {
        files: ["*.ts"],
        rules: {
          "no-debugger": "warn",
        },
      },
      {
        files: ["*.ts"],
        rules: {
          "no-typescript": "error",
        },
      },
    ]);
  });
});
