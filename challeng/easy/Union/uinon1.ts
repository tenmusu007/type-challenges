// https://zenn.dev/kagan/articles/typescript-practice#%E3%80%90lv.3%E3%80%91%E5%88%A4%E5%88%A5%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%A6%E3%83%8B%E3%82%AA%E3%83%B3%E5%9E%8B-1

type ShapeType = 'circle' | 'square';

type Hoge<T> = {
  [key in keyof T]: T[key] extends 'circle'
    ? { type: 'circle'; radius: number }
    : { type: 'square'; side: number };
};

type Fuga = Hoge<ShapeType>;

type Shape =
  | { type: 'circle'; radius: number }
  | { type: 'square'; side: number };

const getArea = (shape: Shape) => {
  switch (shape.type) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
};

// ✅ 想定通りのコード。エラーにならないようにしてください
console.log(getArea({ type: 'circle', radius: 3 }));
console.log(getArea({ type: 'square', side: 4 }));

// ❌ 以下はエラーにしてください
console.log(getArea({ type: 'circle' })); // radius がないのでエラーにしたい
console.log(getArea({ type: 'square' })); // side がないのでエラーにしたい
console.log(getArea({ type: 'circle', radius: 2, side: 4 })); // 余計なプロパティがあるのでエラーにしたい
console.log(getArea({ type: 'triangle' })); // 存在しない type なのでエラーにしたい
