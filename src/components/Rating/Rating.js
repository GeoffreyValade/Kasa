import React from "react";
import "./Rating.css";

export default function Rating({ rateValue }) {
	const range = [1, 2, 3, 4, 5]

	return (
		<div className="stars-container">
			{range.map((rangeElem) =>
				rateValue >= rangeElem ?
					(<p key={rangeElem} className="colored-star fa-solid fa-star" />) :
					(<p key={rangeElem} className="grey-star fa-solid fa-star"></p>)
			)}
		</div>
	)
}