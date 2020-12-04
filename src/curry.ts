// カリー化
// NOTE: カリー化は、複数の引数をとる関数を、
// ひとつだけ引数をとる関数に分割してネストさせること

// 通常は、複数引数をとる
const multi = <T extends number = number>(n: T, m: T) => n * m;
console.log(multi(2, 4)); // 8

// 上記「multi」関数をカリー化すると・・・
const curriedMulti = <T extends number = number>(n: T) => {
  return (m: T) => n * m;
};

console.log(curriedMulti<number>(2)(4)); // 8

const simpleCurriedMulti = (n: number) => (m: number) => n * m;
console.log(simpleCurriedMulti(2)(4)); // 8

const triple = simpleCurriedMulti(3);
console.log(triple(5)); // 15
