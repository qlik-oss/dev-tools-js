// @ts-expect-error testing redeclare
let x = "nisse";

console.log(x);

// @ts-expect-error testing redeclare
let x = "kalle"; // eslint-disable-line @typescript-eslint/no-redeclare

export {};
