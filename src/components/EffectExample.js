import React, { useState, useEffect } from "react";

export default function EffectExample() {
	const [joshsCount, setJoshsCount] = useState(1);
	useEffect(function() {
		const myInterval = setInterval(() => {
			console.log(joshsCount);
			setJoshsCount(joshsCount + 1);
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<div className="example">
			<h1>useEffect with setInterval</h1>
			<h2>count {joshsCount}</h2>
		</div>
	);
}
