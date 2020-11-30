function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}

function fill<T>(...args: T[]) {
  return args[0];
}

let a = call(fill, 10, "a");
let b = call(fill, 10);
