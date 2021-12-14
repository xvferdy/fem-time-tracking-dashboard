import React, { useEffect, useState, useContext } from "react";

import { PeriodContext } from "../context/Period.context";

import ellipsis from "../assets/images/icon-ellipsis.svg";

function Card({ title, timeframes }) {
	const period = useContext(PeriodContext);
	const [periodDetails, setPeriodDetails] = useState({});
	const { current, previous } = periodDetails;

	useEffect(() => {
		Object.entries(timeframes).find(([time, { current, previous }]) =>
			time === period ? setPeriodDetails({ current, previous }) : null
		);
		console.log("Card component rendered");
	}, [period, timeframes]);

	return (
		<div className={`card card--${title.toLowerCase().split(" ").join("-")}`}>
			<div className="card__content">
				<div className="card__content-title">
					<p>{title}</p>
					<img src={ellipsis} alt="" />
				</div>
				<div className="card__content-detail">
					<h3>{current}hrs</h3>
					<p>
						{period === "weekly"
							? "Last Week "
							: period === "daily"
							? "Yesterday "
							: "Last Month "}
						- {previous}hrs
					</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
