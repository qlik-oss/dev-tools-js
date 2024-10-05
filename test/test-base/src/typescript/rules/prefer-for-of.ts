const array = [1, 2, 3, 4, 5];

// classic loop should be ok
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// eslint-disable-next-line @typescript-eslint/no-for-in-array
for (const i in array) {
  console.log(i);
}

export {};
