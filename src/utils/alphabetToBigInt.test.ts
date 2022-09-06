import { describe, expect, it } from "vitest";
import { alphabetToBigInt } from "./alphabetToBigInt";

describe("alphabetToBigInt", () => {
  it("should return 0 for a", () => {
    const result = alphabetToBigInt("a");
    expect(result).toBe(0n);
  }),
    it("should return 25 for z", () => {
      const result = alphabetToBigInt("z");
      expect(result).toBe(25n);
    });
});
