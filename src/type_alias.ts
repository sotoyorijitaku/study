// インデックスシグネチャ
let airplaneSeatingAssignments: {
  [seatNumber: string]: string
} = {
  '34D': 'Boris Cherny',
  '34E': 'Bill Gates'
}

// 型エイリアス
type Age = number

type Person = {
  name: String
  age: Age
}

let age: Age = 14

let driver: Person = {
  name: "James May",
  age: age
}

// 合併型と交差型
type Cat = { name: string, purrs: boolean } 
type Dog = { name: string, barks: boolean, wags: boolean }
type CatOrDogOrBoth = Cat | Dog // 合併型 Catでもあるし、Dogでもあるし どっちでもある
type CatAndDog = Cat & Dog // 交差型 どっちの振る舞いも持たなければならばい

const whoAreYou = (entity: CatOrDogOrBoth) => {
  console.log(`I'm ${entity.name}`)
}

const youAreMonster = (entity: CatAndDog) => {
  console.log(`I'm ${entity.name}`)
}

// 合併型 Catの場合
const james: Cat = {
  name: "james",
  purrs: true
}

whoAreYou(james) // 型通る

// 合併型 Dogの場合
const smith: Dog = {
  name: `smith`,
  barks: true,
  wags: false
}

whoAreYou(smith) // 型通る

// 合併型 Bothの場合
const both =  {
  name: 'both',
  purrs: true,
  barks: true,
  wags: true
}

whoAreYou(both) // 型通る

// 交差型
const tarou = {
  name: "tarou",
  purrs: false,
  barks: true,
  wags: true
}
