/* eslint-disable no-redeclare */
/* eslint-disable no-var */

// eslint-disable-next-line no-bitwise
var x = y | z;
// eslint-disable-next-line no-bitwise
var x = y & z;
// eslint-disable-next-line no-bitwise
var x = y ^ z;
// eslint-disable-next-line no-bitwise
var x = ~z;
// eslint-disable-next-line no-bitwise
var x = y << z;
// eslint-disable-next-line no-bitwise
var x = y >> z;
// eslint-disable-next-line no-bitwise
var x = y >>> z;
// eslint-disable-next-line no-bitwise
x |= y;
// eslint-disable-next-line no-bitwise
x &= y;
// eslint-disable-next-line no-bitwise
x ^= y;
// eslint-disable-next-line no-bitwise
x <<= y;
// eslint-disable-next-line no-bitwise
x >>= y;
// eslint-disable-next-line no-bitwise
x >>>= y;

console.log(x);
