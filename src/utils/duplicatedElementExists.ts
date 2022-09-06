export const duplicatedElementExists = (array: string[]): boolean => {
  const set = new Set(array);
  return set.size !== array.length;
};
