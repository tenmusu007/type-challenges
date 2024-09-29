/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #easy #built-in #readonly #object-keys

  ### Question

  Implement the built-in `Readonly<T>` generic without using it.

  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```

  > View on GitHub: https://tsch.js.org/7
*/

/* _____________ Your Code Here _____________ */

type test = Readonly<Todo1>;

// T extends keyof T は、T が T extends keyof T は「T 自体が keyof T の型（オブジェクトのプロパティ名）」という意味になる。
//T はオブジェクト型そのものではなく、オブジェクトのキー（keyof）に限定されてしまう。
type MyReadonly<T extends keyof T> = {
	readonly [key in T]: T[key];
};

type MyReadonly2<T> = {
	readonly [key in keyof T]: T[key];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly2<Todo1>, Readonly<Todo1>>>];
type cases2 = [Expect<Equal<MyReadonly2<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
	title: string;
	description: string;
	completed: boolean;
	meta: {
		author: string;
	};
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7/answer
  > View solutions: https://tsch.js.org/7/solutions
  > More Challenges: https://tsch.js.org
*/
