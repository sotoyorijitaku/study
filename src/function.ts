

function greet1(name: string) {
  return 'hello ' + name
}

let greet2 = function(name: string) {
  return 'hello ' + name
}

let greet3 = (name: string) => {
  return 'hello ' + name
}

let greet4 = (name: string) => 'hello ' + name

let greet5 = new Function('name', 'return "hello " + name')

type Context = {
  appId?: string
  userId?: string
}

function log(message: string, context: Context = {}) {
  let time = new Date().toISOString()
  console.log(time, message, context.userId || 'Not signed in')
}

// レストパラメーター
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0)
}

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumVariadicSafe(1,2,3))

// call, apply, bind 意味不明
function add(a: number, b:number): number {
  return a + b
}

add(10, 20)
add.apply(null, [10, 20])
add.call(null, 10, 20)
add.bind(null, 10, 20)()

function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}


// ジェネレーター
// 関数名の前のアスタリスクによって、その関数はジェネレーター関数になります。
function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

let fibonacciGenerator = createFibonacciGenerator()
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())

function* gen(x) {
  let sum = 0
  while (true) {
    sum = x + sum
    yield sum;
  }
}

let g = gen(10)
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

// イテレーター
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  }
}

type Greet = (name: string) => string
type Log = (message: string, userId?: string) => void
type SumVariadicSafe = (...numbers: number[]) => number

// オーバーロードされた関数
type Reservation = {
  from: Date;
  to: Date | string;
  destination: string;
}
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
}

// シグネチャを満たすように関数作ればオーバーロードになる
const reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  return {
    from: from,
    to: toOrDestination,
    destination: destination
  }
}

console.log(reserve(new Date(), new Date(), "anoyo"))
console.log(reserve(new Date(), "anoyo"))

// 備考

let str: string | undefined
console.log(str)
str = "aoaoao"
console.log(str)

let int: number
console.log(int)
int = 99
console.log(int)
