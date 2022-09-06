import { describe, expect, it } from "vitest";

export const alphabetToNumber = (alphabet: string) => {
  let result = 0;
  for (let i = 0; i < alphabet.length; i++) {
    result = result * 26 + alphabet.charCodeAt(i) - 64;
  }
  return result;
};

describe("alphabetToNumber", () => {
  it("A = 1", () => {
    const result = alphabetToNumber("A");
    expect(result).toBe(0);
  });
});
