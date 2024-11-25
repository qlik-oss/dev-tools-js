import { describe, expect, it } from "vitest";

import type { ESLintFlatConfig } from "../../types/index.js";
import { mergeConfigs } from "../config.js";

describe("config", () => {
  it("should merge multiple config objects into one", () => {
    const config1: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
        "no-debugger": "error",
      },
    };

    const config2: ESLintFlatConfig = {
      rules: {
        "no-alert": "warn",
        "no-debugger": "off",
      },
    };

    const expectedConfig: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
        "no-debugger": "off",
        "no-alert": "warn",
      },
    };
    const result = mergeConfigs(config1, config2);
    expect(result).toEqual(expectedConfig);
  });

  it("should override rules from previous configs", () => {
    const config1: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
      },
    };

    const config2: ESLintFlatConfig = {
      rules: {
        "no-console": "warn",
      },
    };

    const expectedConfig: ESLintFlatConfig = {
      rules: {
        "no-console": "warn",
      },
    };
    const result = mergeConfigs(config1, config2);
    expect(result).toEqual(expectedConfig);
  });

  it("should handle empty configs", () => {
    const config1: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
      },
    };

    const expectedConfig: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
      },
    };
    const result = mergeConfigs(config1, {});
    expect(result).toEqual(expectedConfig);
  });

  it("should return an empty object when no configs are provided", () => {
    const expectedConfig = {};

    const result = mergeConfigs();
    expect(result).toEqual(expectedConfig);
  });

  it("should handle names of the configs", () => {
    const config1: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
      },
      name: "config1",
    };

    const config2: ESLintFlatConfig = {
      rules: {
        "no-debugger": "error",
      },
      name: "config2",
    };

    const expectedConfig: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
        "no-debugger": "error",
      },
      name: "@qlik/eslint-config/config2",
    };
    const result = mergeConfigs(config1, config2);
    expect(result).toEqual(expectedConfig);
  });

  it("should handle names of the configs when @qlik/eslint-config already been added", () => {
    const config1: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
      },
      name: "config1",
    };

    const config2: ESLintFlatConfig = {
      rules: {
        "no-debugger": "error",
      },
      name: "@qlik/eslint-config/config2",
    };

    expect(mergeConfigs(config1, config2)).toEqual({
      rules: {
        "no-console": "error",
        "no-debugger": "error",
      },
      name: "@qlik/eslint-config/config2",
    });

    expect(mergeConfigs(config2, config1)).toEqual({
      rules: {
        "no-console": "error",
        "no-debugger": "error",
      },
      name: "@qlik/eslint-config/config1",
    });

    const config3: ESLintFlatConfig = {
      rules: {
        "no-console": "error",
      },
      name: "@qlik/eslint-config/config3",
    };

    expect(mergeConfigs(config2, config3)).toEqual({
      rules: {
        "no-console": "error",
        "no-debugger": "error",
      },
      name: "@qlik/eslint-config/config3",
    });

    expect(mergeConfigs(config3, config2)).toEqual({
      rules: {
        "no-console": "error",
        "no-debugger": "error",
      },
      name: "@qlik/eslint-config/config2",
    });
  });
});
