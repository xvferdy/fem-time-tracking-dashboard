import React from "react";
import work from "../assets/images/icon-work.svg";
import ellipsis from "../assets/images/icon-ellipsis.svg";

function Card() {
	return (
		<div className="card">
			<div className="card-sleeve">
				<img src={work} alt="" />

				<div className="card__content">
					<div className="card__content-title">
						<p>work</p>
						<img src={ellipsis} alt="" />
					</div>
					<div className="card__content-detail">
						<h3>5hrs</h3>
						<p>Yesterday - 7hrs</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
