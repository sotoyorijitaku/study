// null
function a(x: number) {
  if ( x < 10 ) {
    return x
  }
  return null
}


console.log(a(9))
console.log(a(11))

// undefinedを返す関数
function b() {
  return undefined
}

console.log(b())

// voidを返す関数
function c() {
  let a = 2 * 2
  let b = a * a 
}

console.log(c())


// never 決して戻ることのない関数の型
function d() {
  throw TypeError('I always error')
}

function e() {
  while(true) {
  }
}