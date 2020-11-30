// クラスは構造的に型付けされる
// 他言語みたいに名前じゃないよ

class Zebra {
  trot() {
    return "Hayaiyo !";
  }
}

class Poodle {
  trot() {
    return "Osoiyo !";
  }
}

function ambleAround(animal: Zebra) {
  console.log(animal.trot());
}

let zebra = new Zebra();
let poodle = new Poodle();

ambleAround(zebra);
ambleAround(poodle);
