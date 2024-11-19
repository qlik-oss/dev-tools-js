import { A } from "./submodules/module-alpha"; // eslint-disable-line import-x/no-duplicates
import { one } from "./submodules/module-num";
/* prettier-disable */
import { B } from "./submodules/module-alpha"; // eslint-disable-line import-x/no-duplicates

console.log(A, one, B);
