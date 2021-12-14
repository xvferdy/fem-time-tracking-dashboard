import React from "react";
import Card from "./Card";
import Profile from "./Profile";

import SUMMARY_DATA from "../utils/data.json";

function Dashboard() {
	return (
		<section className="dashboard">
			<Profile />
			{SUMMARY_DATA.map((activity, idx) => (
				<Card key={idx} id={idx} {...activity} />
			))}
		</section>
	);
}

export default Dashboard;
