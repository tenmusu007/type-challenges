type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// const test: Test = {
//   title: 'hoge',
//   description: 'aaa',
// };

// let test: Test = {
//   title: 'hahha',
//   description: 'hehe',
//   meta: {
//     author: 'haha',
//   },
// };
// console.log('first', test);

// test = {
//   title: 'wow',
//   description: 'wow',
//   meta: {
//     author: 'wow',
//   },
// };


// console.log('second', test);

const func = (arg: readonly string[]) => {
  return arg;
};

const arr = ['hoo', 'buff'] as const;

const result = func(arr);

const testFunc = (arg: Test) => {
  return true;
};

const Arg = {
  title: 'hoge',
  description: 'test',
  meta: {
    author: 'haha',
  },
};
type Test = {
  readonly title: string;
  description: string;
  meta: {
    readonly author: string;
  };
};

testFunc(Arg);
