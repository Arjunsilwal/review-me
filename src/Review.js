import React from "react";
import people from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	const randomPerson = () => {
		setIndex(() => {
			const randomIndex = Math.floor(Math.random() * people.length);
			if (randomIndex === index) {
				if (randomIndex < people.length - 1) {
					return randomIndex + 1;
				} else {
					return randomIndex - 1;
				}
			}
			return randomIndex;
		});
	};
	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button
					className="prev-btn"
					onClick={() =>
						index > 0 && index < people.length
							? setIndex(index - 1)
							: setIndex(people.length - 1)
					}
				>
					<FaChevronLeft />
				</button>
				<button
					className="next-btn"
					onClick={() =>
						index < people.length - 1 ? setIndex(index + 1) : setIndex(0)
					}
				>
					<FaChevronRight />
				</button>
			</div>
			{/* onClick={randomPerson} */}
			<button className="random-btn" onClick={randomPerson}>
				suprise me
			</button>
		</article>
	);
}

export default Review;
