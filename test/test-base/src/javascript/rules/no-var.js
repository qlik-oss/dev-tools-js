// incorrect code
// eslint-disable-next-line no-var
var x = "y";
// eslint-disable-next-line no-var
var CONFIG = {};

console.log(x, CONFIG);

// correct code

const x2 = "y";
const CONFIG2 = {};

console.log(x2, CONFIG2);
