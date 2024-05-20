// type PartialByKeys<T, K extends keyof T = keyof T > = {
//   [P in keyof K as P extends K ? [P | undefined?] : P]: T[P];
// };

// Omit でobj & objが使えるよ！
type PartialByKeys<T, K extends keyof T = keyof T> = Omit<
  {
    [key in K]?: T[key];
  } & {
    [key in Exclude<keyof T, K>]: T[key];
  },
  never
>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>
];
