import React, { useContext } from "react";

import { DispatchPeriodContext } from "../context/Period.context";
import avatar from "../assets/images/image-jeremy.png";

function Profile() {
	const dispatch = useContext(DispatchPeriodContext);
	return (
		<section className="profile">
			<div className="profile__header">
				<img src={avatar} alt="Jeremy profile avatar" />
				<p>Report for</p>
				<h1>Jeremy Robson</h1>
			</div>
			<div className="profile__tabs">
				<button onClick={() => dispatch({ type: "DAILY" })}>Daily</button>
				<button onClick={() => dispatch({ type: "WEEKLY" })}>Weekly</button>
				<button onClick={() => dispatch({ type: "MONTHLY" })}>Monthly</button>
			</div>
		</section>
	);
}

export default Profile;
