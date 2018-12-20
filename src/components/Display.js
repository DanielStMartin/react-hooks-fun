import React from "react";
import CustomHooks from "./CustomHooks";
export default function Display() {
	const data = CustomHooks();
	const mappedData = data
		? data.map((pokemon) => {
				return <img src={pokemon.imageUrl} />;
		  })
		: "loading...";

	return <div className="example">{mappedData}</div>;
}
