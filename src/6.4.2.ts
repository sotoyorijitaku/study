// タイプガード

console.log(typeof "a");
console.log(typeof 1);

type Human = {
  name: string;
};

// 型推論できないパターン
function isString(a: unknown): boolean {
  return typeof a == "string";
}
function parseInputCantInferType(input: string | number) {
  if (!isString(input)) {
    return input;
  }

  //return input.toUpperCase(); // NGな理由はstring型と推論できないから
}

// アーリーリターンパターン
function parseInputEarlyReturn(input: string | number) {
  // string | number の型を特定している
  if (typeof input == "number") {
    return input;
  }

  // line 12で型を特定しているため、inputがstringだと推論できる
  return input.toUpperCase();
}

// タイプガートパターン a is string みたいなの type predicateと呼ぶらしい
function isStringWithTypeGuard(a: unknown): a is string {
  return typeof a == "string";
}

function parseInputWithTypeGuard(input: string | number) {
  if (!isStringWithTypeGuard(input)) {
    return input;
  }

  return input.toUpperCase();
}

// 実践
type LegacyDialog = {
  name: string;
};

type Dialog = {
  name: number;
};

function isLegacyDialog(dialog: LegacyDialog | Dialog): dialog is LegacyDialog {
  if (typeof dialog.name == "string") {
    return true;
  }

  return false;
}
