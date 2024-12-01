type JpnCoin = 1 | 5 | 10 | 50 | 100 | 500;
type UsCoin = 1 | 5 | 10 | 25;

// 集合同士の演算
// ユニオン型
type UnionCoin = JpnCoin | UsCoin;
// 1 | 5 | 10 | 50 | 100 | 500 | 25

// インターセクション型
type IntersctionCoin = JpnCoin & UsCoin;
// 1 | 5 | 10
