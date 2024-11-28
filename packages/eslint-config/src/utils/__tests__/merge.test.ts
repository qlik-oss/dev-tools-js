import { describe, expect, it } from "vitest";
import { merge } from "../merge.js";

describe("merge function", () => {
  it("should merge two objects without duplicates", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });
  // Add more tests here including arrays, nested objects, etc.
  it("should merge two objects with arrays without duplicates", () => {
    const obj1 = { a: 1, b: [1, 2] };
    const obj2 = { b: [2, 3], c: 4 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: [1, 2, 3], c: 4 });
  });
  // Add test with objects with nested objects
  it("should merge two objects with nested objects without duplicates", () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = { b: { c: 3, e: 4 }, f: 5 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: { c: 3, d: 3, e: 4 }, f: 5 });
  });

  it("should merge two objects with nested objects and arrays without duplicates", () => {
    const obj1 = { a: 1, b: { c: 2, d: [1, 2] } };
    const obj2 = { b: { d: [2, 3], e: 4 }, f: 5 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: { c: 2, d: [1, 2, 3], e: 4 }, f: 5 });
  });

  it("should handle deep merging of both objects and arrays", () => {
    const obj1 = { a: 1, b: { c: 2, d: [1, 2] } };
    const obj2 = { b: { d: [2, 3], e: 4 }, f: 5 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: { c: 2, d: [1, 2, 3], e: 4 }, f: 5 });
  });

  it("should overwrite object if it merges with a non-object", () => {
    const obj1 = { a: 1, b: { c: 2, d: [1, 2] } };
    const obj2 = { b: 3, f: 5 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, f: 5 });
  });

  it("should not deep merge plugins or rules properties", () => {
    const obj1 = {
      plugins: { a: { deep: { b: "world" } }, b: "b" },
      rules: { a: ["error", { setting: { a: "foo" } }], b: "off" },
    };
    const obj2 = {
      plugins: { a: { overwritten: { b: "nomerge" } } },
      rules: { a: ["warn", { changed: { b: "bar" } }] },
    };

    const result = merge(obj1, obj2);
    expect(result).toEqual({
      plugins: { a: { overwritten: { b: "nomerge" } }, b: "b" },
      rules: { a: ["warn", { changed: { b: "bar" } }], b: "off" },
    });
  });

  it("should handle merging with empty objects", () => {
    const obj1 = { a: 1, b: { c: 2, d: [1, 2] } };
    const obj2 = {};
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: { c: 2, d: [1, 2] } });
  });

  it("should handle merging with keys that should be overridden", () => {
    const obj1 = {
      a: 1,
      b: 2,
      files: ["*.js"],
      ignores: ["should not be present after merge"],
      globals: ["BrowserGlobal1"],
    };
    const obj2 = { a: 3, c: 4, files: ["*.ts"], ignores: ["only this"], globals: ["NodeGlobal1"] };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 3, b: 2, c: 4, files: ["*.ts"], ignores: ["only this"], globals: ["NodeGlobal1"] });
  });
});
