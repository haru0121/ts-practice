// このサンプルコードでは、tsconfig.jsonに "moduleDetection": "force" を設定しているため、すべてのファイルがモジュールとして扱われます。
// このエラー発生させるには、上記の設定をコメントアウトしてください。

const pi = 3.14; // Error
// >> Cannot redeclare block-scoped variable 'pi'.

// export {};
