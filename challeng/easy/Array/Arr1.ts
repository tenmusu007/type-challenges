//https://zenn.dev/kagan/articles/typescript-practice#%E3%80%90lv.2%E3%80%91%E8%A6%81%E7%B4%A0%E6%95%B0%E3%81%AE%E6%B1%BA%E3%81%BE%E3%81%A3%E3%81%9F%E9%85%8D%E5%88%97-1

type AtLeast2<T> = [T] | [T, T];
type Pokemon = {
  name: string;
  type: AtLeast2<string>; // ✍🏼 この型を修正してください
};
type A = ["ほのお", "ひこう"]
type B = A["map"]
type Hoge<T extends string[]> = T["lastIndexOf"] extends 2 ? T : (T["length"] extends 1 ? T :never)
// ✅ 以下は想定通りのコードです。エラーにならないようにしてください
const pikachu: Pokemon = {
  name: "ピカチュウ",
  type: ["でんき"],
};
const charizard: Pokemon = {
  name: "リザードン",
  type: ["ほのお", "ひこう"],
};

// ❌ 以下はエラーにしたいです
const typeNull: Pokemon = {
  name: "タイプ：ヌル",
  // 要素数が0なのでエラーにしたいです（※問題には関係ないですが、本当はノーマルタイプです）
  type: [],
};
const lugia: Pokemon = {
  name: "ルギア",
  // 要素数が3以上なのでエラーにしたいです（※問題には関係ないですが、本当はエスパー・ひこうタイプです）
  type: ["エスパー", "ひこう", "みず"],
};
const terapagos: Pokemon = {
  name: "テラパゴス",
  // 要素数が3以上なのでエラーにしたいです（※問題には関係ないですが、本当はノーマルタイプです）
  type: ["ノーマル", "ほのお", "みず", "でんき", "くさ", "こおり", "かくとう", "どく", "じめん", "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー"],
};