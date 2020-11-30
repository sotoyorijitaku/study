// 実装 implementsの使い方
interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Feline {
  meow(): void;
}

class Cat implements Animal, Feline {
  readonly name: string;
  eat(food: string) {
    console.log("Ate some", food, ". Mmm!");
  }
  sleep(hours: number) {
    console.log("Slept for", hours, "hours");
  }
  meow() {
    console.info("Meow");
  }
}
