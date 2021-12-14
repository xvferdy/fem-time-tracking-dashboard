import React, { useContext } from "react";
import { motion } from "framer-motion";

import { DispatchPeriodContext } from "../context/Period.context";
import { PeriodContext } from "../context/Period.context";

import avatar from "../assets/images/image-jeremy.png";

const headerVariants = {
	hidden: {
		y: -80,
	},
	visible: {
		y: 0,
		backgroundColor: [
			"rgb(255, 92, 124)",
			"rgb(86, 194, 230)",
			"rgb(88, 71, 235)",
		],
		transition: {
			duration: 2,
			ease: "anticipate",
		},
	},
};

function Profile() {
	const dispatch = useContext(DispatchPeriodContext);
	const period = useContext(PeriodContext);

	return (
		<section className="profile">
			<motion.div
				className="profile__header"
				variants={headerVariants}
				initial="hidden"
				animate="visible"
			>
				<img src={avatar} alt="Jeremy profile avatar" />
				<div className="profile__header-text">
					<p>Report for</p>
					<motion.h1
						whileHover={{
							color: [
								"#fff",
								"#ff8c66",
								"#56c2e6",
								"#ff5c7c",
								"#4acf81",
								"#f1c65b",
							],
							transition: {
								duration: 2,
								yoyo: Infinity,
							},
						}}
					>
						Jeremy Robson
					</motion.h1>
				</div>
			</motion.div>
			<motion.div
				className="profile__tabs"
				initial={{ y: -250 }}
				animate={{ y: 0 }}
				transition={{ duration: 2, ease: "anticipate" }}
			>
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
			</motion.div>
		</section>
	);
}

export default Profile;
