import React, { useContext } from "react";

import { DispatchPeriodContext } from "../context/Period.context";
import { PeriodContext } from "../context/Period.context";

import avatar from "../assets/images/image-jeremy.png";

function Profile() {
	const dispatch = useContext(DispatchPeriodContext);
	const period = useContext(PeriodContext);

	return (
		<section className="profile">
			<div className="profile__header">
				<img src={avatar} alt="Jeremy profile avatar" />
				<div className="profile__header-text">
					<p>Report for</p>
					<h1>Jeremy Robson</h1>
				</div>
			</div>
			<div className="profile__tabs">
				<button
					className={period === "daily" ? "button button--active" : "button"}
					onClick={() => dispatch({ type: "DAILY" })}
				>
					Daily
				</button>
				<button
					className={period === "weekly" ? "button button--active" : "button"}
					onClick={() => dispatch({ type: "WEEKLY" })}
				>
					Weekly
				</button>
				<button
					className={period === "monthly" ? "button button--active" : "button"}
					onClick={() => dispatch({ type: "MONTHLY" })}
				>
					Monthly
				</button>
			</div>
		</section>
	);
}

export default Profile;
