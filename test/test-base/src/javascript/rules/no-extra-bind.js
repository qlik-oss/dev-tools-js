/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */

var x = function () {
  foo();
}.bind(bar); // eslint-disable-line no-extra-bind

var x = (() => {
  foo();
}).bind(bar); // eslint-disable-line no-extra-bind

var x = (() => {
  this.foo();
}).bind(bar); // eslint-disable-line no-extra-bind

var x = function () {
  (function () {
    this.foo();
  })();
}.bind(bar); // eslint-disable-line no-extra-bind

var x = function () {
  function foo() {
    this.bar();
  }
}.bind(baz); // eslint-disable-line no-extra-bind

// correct

var x = function () {
  this.foo();
}.bind(bar);

var x = function (a) {
  return a + 1;
}.bind(foo, bar);
