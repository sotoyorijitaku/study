class Bird<T extends string> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }

  chirp() {
    console.log(`${this.name}が鳴きました`);
  }

  static explain<T>(name: T) {
    console.log(`${name}は翼があって卵を生みます`);
  }
}

class FlyableBird<T extends string> extends Bird<string> {
  constructor(name: T) {
    super(name);
  }

  fly() {
    console.log(`${this.name}が飛びました`);
  }
}

const bd1 = new Bird("ペンギン");
bd1.chirp();
Bird.explain("カラス");

const bd2 = new FlyableBird("スズメ");
bd2.fly();
