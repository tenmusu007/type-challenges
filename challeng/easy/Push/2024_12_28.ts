/*
  3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #easy #array

  ### Question

  Implement the generic version of ```Array.push```

  For example:

  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```

  > View on GitHub: https://tsch.js.org/3057
*/

/* _____________ Your Code Here _____________ */

type Push<T extends any[], U> = [...T, U]
type PushUnknown<T extends unknown[], U> = [...T, U]

type Push2<T extends any[], U> = U extends any[] ? [...T, ...U] : [...T, U]


type Test = Push<[1, 2], 3>
// type Test2 = PushUnknown<, 3>



/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
  Expect<Equal<Push<['1', 2, '3'], [{name:"Ken", age:20}]>, ['1', 2, '3', [{name:"Ken", age:20}]]>>,
  Expect<Equal<Push2<['1', 2, '3'], [{name:"Ken", age:20},{name:"Tomo", age:20}]>, ['1', 2, '3', {name:"Ken", age:20},{name:"Tomo", age:20}]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3057/answer
  > View solutions: https://tsch.js.org/3057/solutions
  > More Challenges: https://tsch.js.org
*/
