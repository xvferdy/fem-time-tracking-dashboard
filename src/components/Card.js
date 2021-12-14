import React, { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

import { PeriodContext } from "../context/Period.context";

import ellipsis from "../assets/images/icon-ellipsis.svg";

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.2,
			ease: "backOut",
		},
	},
};

const contentVariants = {
	hidden: {
		y: 200,
	},
	visible: {
		y: [1, 0],
	},
};

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

	const [isShow, setIsShow] = useState(true);
	return (
		<motion.div
			className={`card card--${title.toLowerCase().split(" ").join("-")}`}
			variants={cardVariants}
			initial="hidden"
			animate="visible"
			// onClick={() => setIsShow(!isShow)}
		>
			<AnimatePresence>
				{isShow && (
					<motion.div
						className="card__content"
						variants={contentVariants}
						exit={{ y: 200, opacity: 0 }}
					>
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
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default Card;
