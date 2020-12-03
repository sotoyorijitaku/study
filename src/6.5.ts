// 条件
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;
type B = IsString<number>;
