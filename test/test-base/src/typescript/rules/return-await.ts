/* eslint-disable @typescript-eslint/no-unused-vars */

let doit = true;

async function invalidInTryCatch1() {
  if (doit) {
    // eslint-disable-next-line @typescript-eslint/return-await
    return await Promise.resolve("the trye");
  }
  try {
    doit = false;
    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.reject(new Error("try"));
  } catch (e) {
    // Doesn't execute due to missing await.
  }
  return "nothing";
}
