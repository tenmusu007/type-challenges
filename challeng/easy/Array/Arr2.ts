import type { Equal, Expect } from '@type-challenges/utils';

type AtLeast1<T extends string[]> = T['length'] extends 0
  ? never
  : [...T, ...T];

const headOfHead = (
  array: [string, ...string[]] /* ✍🏼 この型を修正してください */
) => {
  return array[0].charAt(0);
};
const hoge = ['test', 'world'];
type hoeg = typeof hoge;
// ✅ 想定通りのコード
console.log(headOfHead(['test'])); // t が出力されます
console.log(headOfHead(['hello', 'world'])); // h が出力されます
console.log(headOfHead(['Alpha', 'Bravo', 'Charlie', 'Delta'])); // A が出力されます

// ❌ 以下がエラーになれば正解です
// @ts-expect-error
console.log(headOfHead([])); // 実行時にエラーになります

// type cases = [Expect<Equal<[string, ...string[]], AtLeast1<string[]>>>];
