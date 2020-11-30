let set = new Set();
set.add(1).add(2).add(3);
console.log(set.has(2));
console.log(set.has(3));

class MutableSet extends Set {
  constructor() {
    super();
  }

  delete(value: number): boolean {
    return true;
  }
  add(value: number): this {
    return;
  }
}

const mutableSet = new MutableSet();
console.log(mutableSet);

// ちょっと理解不明ですが、thisで自分自身を返せるということらしい
