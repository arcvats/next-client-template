import { describe, it, expect } from "vitest";

describe("Sample tests", () => {
  it("should add 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

  it("should subtract 2 - 1 to equal 1", () => {
    expect(2 - 1).toBe(1);
  });

  it("should multiply 2 * 3 to equal 6", () => {
    expect(2 * 3).toBe(6);
  });

  it("should divide 6 / 2 to equal 3", () => {
    expect(6 / 2).toBe(3);
  });
});
