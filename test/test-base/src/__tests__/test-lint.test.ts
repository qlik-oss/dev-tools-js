import { expect, test } from "vitest";

const testme = "testme";

test("This is just a test", () => {
  expect(testme).toBe("testme");
});
