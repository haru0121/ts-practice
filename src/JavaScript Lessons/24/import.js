/*
  ES Modules の export/import
*/

// import

//// 1. 名前付きエクスポートのインポート
import { myFunction, myVariable } from "./myModule.js";

//// 2. すべての名前付きエクスポートを 1 つのオブジェクトとしてインポート（名前空間インポート）
import * as myModule from "./myModule.js";

//// 3. デフォルトエクスポートのインポート
import myDefault from "./myModule.js";

//// 4. 名前付きエクスポートとデフォルトエクスポートを同時にインポート
import myDefault, { myFunction, myVariable } from "./myModule.js";

//// 5. 名前付きエクスポートを別名でインポート
import { myFunction as myFunc, myVariable as myVal } from "./myModule.js";
