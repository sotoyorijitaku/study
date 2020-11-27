// 配列
let arrayF = ['red']
let arrayA: Array<string> = ['red'] // 書き方
let arrayB: string[] = ['red'] // 書き方 alt

// タプル
let tupleA: [number] = [1]
let tupleB: [string, string, string] = ['a', 'b', 'c']
let tupleC: [number, string] = [1, 'a']

// タプル 省略可能な要素もサポート
let trainFares: [number, number?][] = [
  [3.75], //要素２つ目がない
  [8.25, 7.70],
  [10.50]
]

// タプル 省略可能な要素もサポート alt
let moreTrainFares: ([number] | [number, number])[] = [
  [3.75], //要素２つ目がない
  [8.25, 7.70],
  [10.50]
]