/* eslint-disable no-redeclare */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-var */

var foo = !!!bar; // eslint-disable-line no-extra-boolean-cast

var foo = !!bar ? baz : bat; // eslint-disable-line no-extra-boolean-cast

var foo = Boolean(!!bar); // eslint-disable-line no-extra-boolean-cast

var foo = new Boolean(!!bar); // eslint-disable-line no-extra-boolean-cast

// eslint-disable-next-line no-extra-boolean-cast
if (!!foo) {
  // ...
}

// eslint-disable-next-line no-extra-boolean-cast
if (Boolean(foo)) {
  // ...
}

// eslint-disable-next-line no-extra-boolean-cast
while (!!foo) {
  // ...
}

do {
  // ...
  // eslint-disable-next-line no-extra-boolean-cast
} while (Boolean(foo));

// eslint-disable-next-line no-extra-boolean-cast
for (; !!foo; ) {
  // ...
}
