/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line camelcase
import { no_camelcased } from "./submodules/camelcased";

// eslint-disable-next-line camelcase
const my_favorite_color = "#112C85";

// eslint-disable-next-line camelcase
function do_something() {
  // ...
}

// eslint-disable-next-line camelcase
function foo({ no_camelcased }) {
  // ...
}

// eslint-disable-next-line camelcase
function bar({ isCamelcased: no_camelcased }) {
  // ...
}

// eslint-disable-next-line camelcase
function baz({ no_camelcased = "default value" }) {
  // ...
}

const obj = {
  my_pref: 1,
};

obj.do_something = function named() {
  // ...
};

const query = {
  category_id: 15,
};

const quz = {
  foo: 1,
  q: query.category_id,
};

// eslint-disable-next-line camelcase
const { category_id = 1 } = query;
// eslint-disable-next-line camelcase
const { foo: snake_cased } = bar;
// eslint-disable-next-line camelcase
const { foo: bar_baz = 1 } = quz;
