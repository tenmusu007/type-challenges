type SpecialItem = {
	valiant: "special";
	name: string;
	price: number;
};

type FreeItem = {
	valiant: "free";
	name: string;
};

type SpecialItem2 = {
	valiant: "special";
	name: string;
};

const arr: (SpecialItem | FreeItem | SpecialItem2)[] = [
	{ valiant: "special", name: "超絶重課金モード", price: 10_000_000 },
	{ valiant: "special", name: "微課金モード", price: 100 },
	{ valiant: "free", name: "貧乏モード" },
	{ valiant: "special", name: "超絶重課金モード" },
];

// number[]にしたい。
const specialKakinWithTaxArr = arr
	.filter((item) => item.valiant === "special")
	// @ts-expect-error
	.map((item) => item.price * 0.8); // <= ここで型で怒られる

// ので、型ガードしたいのですが...。
// 自分の思う型Safetyな方法で型ガードを行い、型で怒られないようにしましょう！！

const hikakutekiSafety = arr
	// ⇩この行をSafetyに型ガードして欲しい。
	.filter(
		(item): item is Extract<typeof item, { valiant: "special" }> =>
			item.valiant === "special",
	)
	// @ts-expect-error
	.map((item) => item.price * 0.8);
