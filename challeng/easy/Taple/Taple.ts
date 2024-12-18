import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const sym1 = Symbol(1)
const sym2 = Symbol(2)
const tupleSymbol = [sym1, sym2] as const
const tupleMix = [1, '2', 3, '4', sym1] as const
const A = {
  name: 'tesla',
  type: {
    name: 'model 3',
    age: 'model X',
    address: 'model Y',
  }
}

// type test = ObjectConstructor['freeze']


// type TupleToObject<T extends readonly any[]> = {
//   [Key in keyof T ]: Key
// }

type TupleToObject<T extends readonly PropertyKey[]> = {
  [Key in T[number] ]: Key
}

type Test = TupleToObject<typeof tuple>

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1, 2: 2, 3: 3, 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleSymbol>, { [sym1]: typeof sym1, [sym2]: typeof sym2 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1, '2': '2', 3: 3, '4': '4', [sym1]: typeof sym1 }>>,
]
