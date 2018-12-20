import React, { useState } from "react";
export default function HookComp() {
	const [count, setCount] = useState(1);
	return (
		<div className="example">
			<h1>Hooks Example</h1>
			<h2>{count}</h2>
			<button onClick={() => setCount(count - 1)}>Decremement</button>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}
