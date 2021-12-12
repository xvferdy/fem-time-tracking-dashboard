import React from "react";

import avatar from "../assets/images/image-jeremy.png";

function Profile() {
	return (
		<section className="profile">
			<div className="profile__header">
				<img src={avatar} alt="Jeremy profile picture" />
				<p>Report for</p>
				<h1>Jeremy Robson</h1>
			</div>
			<div className="profile__tabs">
				<button>Daily</button>
				<button>Weekly</button>
				<button>Monthly</button>
			</div>
		</section>
	);
}

export default Profile;
