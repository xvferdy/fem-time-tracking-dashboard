const reducer = (state, action) => {
	switch (action.type) {
		case "DAILY":
			return "daily";
		case "WEEKLY":
			return "weekly";
		case "MONTHLY":
			return "monthly";

		default:
			return alert("KEKW");
	}
};

export default reducer;
