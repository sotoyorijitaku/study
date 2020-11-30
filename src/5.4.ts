// 5.4 インターフェース

// 単純に typeエイリアスとインタフェースでSushiを表すと・・・
// type Sushi = {
//   calories: number;
//   salty: boolean;
//   tasty: boolean;
// };

// interface Sushi {
//   calories: number;
//   salty: boolean;
//   tasty: boolean;
// }

// typeエイリアスでSushiとCakeを表すと・・・
// type Food = {
//   calories: number;
//   tasty: boolean;
// };

// type Sushi = Food & {
//   salty: boolean;
// };

// type Cake = Food & {
//   sweet: boolean;
// };

// インタフェースでSushiとCakeを表すと・・・
// interface Food {
//   calories: number;
//   tasty: boolean;
// }

// interface Sushi extends Food {
//   salty: boolean;
// }

// interface Cake extends Food {
//   salty: boolean;
// }

// type Hoge = number;
// type Fuga = Hoge | string;

// interface Hoge {
//   good(x: number): string;
//   bad(x: number): string;
// }

// interface Fuga extends Hoge {
//   good(x: string | number): string;
//   bad(x: string): string;
// }

type A = {
  good(x: number): string;
  bad(x: number): string;
};

type B = A & {
  good(x: string | number): string;
  bad(x: string): string;
};

// インターフェース 宣言のマージ
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "aiueo",
  age: 1293,
};

// typeエイリアス 宣言のマージできない
// type User {
//   age: string;
// }

// type User {
//   age: number;
// }
