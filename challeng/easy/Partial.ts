import type { Equal, Expect } from '@type-challenges/utils';

type PartialObj = {
  name?: string | undefined;
  age?: number | undefined;
};
type MyPartial<T> = {
  [key in keyof T]?: T[key] | undefined;
};

// Partialはoptional propertyにする型関数(ユーティリティ関数)

// そもそもoptionalって型とundefinedのユーティリティ関数

//

type cases = [Expect<Equal<Partial<User>, MyPartial<User>>>];

interface User {
  name: 'atusya';
  age: 28;
}

