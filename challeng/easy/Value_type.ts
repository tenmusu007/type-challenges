// 以下のオブジェクトのValueの型をユニオン型としてとってきてください。Keyじゃないよ、Valueだよ。

const user = {
  name: 'okayama',
  age: 31,
  hasChild: 'male',
};

type KeyValue = keyof typeof user;


// lookUp型
type UserValue = (typeof user)[keyof typeof user];

type ValueOf<T extends Record<string | number | symbol, unknown>> =
  T extends string ? never : T[keyof T];

type User = {
  [K in KeyValue]: UserValue;
};
