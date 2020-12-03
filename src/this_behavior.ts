// functionによる関数宣言はその文脈における直上のオブジェクトがthisになる。
// 直上に定義したオブジェクトがない場合はグローバルオブジェクトです。
// 下記でいうと obj1自体が直上のオブジェクトであり`this`
const obj1 = {
  num: 444,
  fn: function () {
    console.log(this.num);
  },
};

// アロー形式では、その関数自体がthisになる。
// つまり下記であればfn自体がthisとなる
const obj2 = {
  num: 888,
  fn: () => {
    console.log(this.num);
  },
};

obj1.fn();
obj2.fn();

const plusOne = (n = 0) => n + 1;

console.log(plusOne(5)); // 6
console.log(plusOne()); // 1
