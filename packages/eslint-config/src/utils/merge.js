// these ones will only do shallow merge, but the merge function will do deep merge
const noNeedToDeepMerge = ["plugins", "rules", "parser"];

/**
 *
 * @param {any} obj1
 * @param {any} obj2
 * @returns
 */
export const merge = (obj1, obj2) => {
  // add error handling
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    throw new Error("Both arguments must be objects");
  }
  const merged = { ...obj1 };
  Object.keys(obj2).forEach((key) => {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      merged[key] = [...new Set([...obj1[key], ...obj2[key]])];
    } else if (noNeedToDeepMerge.includes(key)) {
      merged[key] = { ...obj1[key], ...obj2[key] };
    } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      merged[key] = merge(obj1[key], obj2[key]);
    } else {
      merged[key] = obj2[key];
    }
  });
  return merged;
};
