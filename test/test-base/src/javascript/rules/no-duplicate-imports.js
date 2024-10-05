import { A } from "./submodules/module-alpha";
import { one } from "./submodules/module-num";
/* prettier-disable */
import { B } from "./submodules/module-alpha"; // eslint-disable-line no-duplicate-imports

console.log(A, one, B);
