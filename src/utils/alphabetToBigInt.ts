export const alphabetToBigInt = (alphabet: string): bigint => {
  return BigInt(alphabet.charCodeAt(0) - 97);
};
