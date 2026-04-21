import { describe, expect, it } from "vitest";
import vitestPlugin from "@vitest/eslint-plugin";

describe("resolver-next regression", () => {
  it("keeps package imports resolvable", () => {
    expect(vitestPlugin.configs).toBeDefined();
  });
});
