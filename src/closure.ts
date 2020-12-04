// クロージャ
// NOTE: クロージャとは、親関数スコープの変数を参照する関数のこと
// だから、下記では関数を戻しているが、戻さなくてもクロージャと言える

// クラスでやると・・・
class Counter {
  c: number;
  constructor(initialCount) {
    this.c = initialCount;
  }

  increment() {
    return this.c++;
  }
}

const counter = new Counter(1);
console.log(counter.increment(), counter.increment(), counter.increment());

// クロージャを使うと
const counterMaker = (initialCount) => {
  let c = initialCount;
  const increment = () => c++;

  return increment;
};

const count = counterMaker(1);
console.log(count(), count(), count());
