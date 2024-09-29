/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy #object-keys

  ### Question

  Given an array, transform it into an object type and the key/value must be in the provided array.

  For example:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > View on GitHub: https://tsch.js.org/11
*/

/* _____________ Your Code Here _____________ */
// {
// 	name: "atsuya";
// }

type TupleToObject<T extends readonly PropertyKey[]> = {
	[K in T[number]]: K;
};

type TupleToObject2<T extends readonly PropertyKey[]> = {
	[K in keyof T]: K;
};

type Test = TupleToObject<typeof tuple>;
type Test2 = TupleToObject2<typeof tuple>;

const MyArray = [
	{ name: "Alice", age: 15 },
	{ name: "Bob", age: 23 },
	{ name: "Eve", age: 38 },
];

type Person = (typeof MyArray)[number];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model3", "modelX", "modelY"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const sym1 = Symbol(1);
const sym2 = Symbol(2);
const tupleSymbol = [sym1, sym2] as const;
const tupleMix = [1, "2", 3, "4", sym1] as const;

type cases = [
	Expect<
		Equal<
			TupleToObject<typeof tuple>,
			{
				tesla: "tesla";
				model3: "model3";
				modelX: "modelX";
				modelY: "modelY";
			}
		>
	>,
	Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
	Expect<
		Equal<
			TupleToObject<typeof tupleSymbol>,
			{ [sym1]: typeof sym1; [sym2]: typeof sym2 }
		>
	>,
	Expect<
		Equal<
			TupleToObject<typeof tupleMix>,
			{ 1: 1; "2": "2"; 3: 3; "4": "4"; [sym1]: typeof sym1 }
		>
	>,
];

// @ts-expect-error
// biome-ignore lint/complexity/noBannedTypes: <explanation>
type error = TupleToObject<[[1, 2], {}]>;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/11/answer
  > View solutions: https://tsch.js.org/11/solutions
  > More Challenges: https://tsch.js.org
*/
