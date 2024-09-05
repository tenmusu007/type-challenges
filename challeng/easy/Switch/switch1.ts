const action = (light: "RED" | "YELLOW" | "GREEN") => {
	switch (light) {
		case "RED": {
			console.log("止まれ");
			break;
		}
		case "GREEN": {
			console.log("進め");
			break;
		}
		default: {
			// ❌"YELLOW" に対する処理が抜けているのでエラーにしてください
			// ✍🏼 このブロックに到達したらエラーになるように修正してください
			break;
		}
	}
};

action("RED");
action("GREEN");
action("YELLOW");