// These are same as `foo(1, 2, 3);`
// eslint-disable-next-line no-useless-call
foo.call(undefined, 1, 2, 3);
// eslint-disable-next-line no-useless-call
foo.apply(undefined, [1, 2, 3]);
// eslint-disable-next-line no-useless-call
foo.call(null, 1, 2, 3);
// eslint-disable-next-line no-useless-call
foo.apply(null, [1, 2, 3]);

// These are same as `obj.foo(1, 2, 3);`
// eslint-disable-next-line no-useless-call
obj.foo.call(obj, 1, 2, 3);
// eslint-disable-next-line no-useless-call
obj.foo.apply(obj, [1, 2, 3]);

// correct
// The `this` binding is different.
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);
obj.foo.apply(null, [1, 2, 3]);
obj.foo.call(otherObj, 1, 2, 3);
obj.foo.apply(otherObj, [1, 2, 3]);

// The argument list is variadic.
// Those are warned by the `prefer-spread` rule.
/* eslint-disable prefer-spread */
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
/* eslint-enable prefer-spread */
