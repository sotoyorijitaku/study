// 分割代入が可能

const [n, m] = [1, 4];
console.log(n, m);

const obj = { firstName: "Kanae", age: 24 };
const { firstName, age } = obj;
console.log(firstName, age);

// ES6から使えるようになった
const arr1 = ["A", "B", "C"];
const arr2 = [...arr1, "B", "C"]; // スプレッド構文
console.log(arr2);

// ES2018から使えるようになった
const sampleObj1 = { a: 1, b: 2, c: 3 };
const sampleObj2 = { ...sampleObj1, d: 4, e: 5 };
console.log(sampleObj2);

// プロパティ名のショートハンド ES6から
const foo = 65536;
const str = "str";
const fooObj = { foo, bar: 4096, str };
console.log(fooObj);
