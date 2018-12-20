import React, { useState, useEffect } from "react";
//State is not merged but overwritten, you must pass all values state needs or break state into multiple seperate "state's"
export default function BadForm() {
	const [name, setName] = useState("");
	const [favColor, setFavColor] = useState("");
	const [favoriteLanguage, setFavoriteLanguage] = useState("");
	const [submittedData, setSubmittedData] = useState(null);

	function submitForm(e) {
		e.preventDefault();
		setSubmittedData({ name, favColor, favoriteLanguage });
		setName("");
		setFavColor("");
		setFavoriteLanguage("");
	}

	const data = submittedData ? (
		<div>
			<span>{submittedData.name}</span>
			<span>{submittedData.favColor}</span>
			<span>{submittedData.favoriteLanguage}</span>
		</div>
	) : (
		""
	);

	return (
		<div className="example">
			{data}
			<form onSubmit={submitForm}>
				<input
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					placeholder="favorite color"
					value={favColor}
					onChange={(e) => setFavColor(e.target.value)}
				/>
				<input
					placeholder="Favorite Language"
					value={favoriteLanguage}
					onChange={(e) => setFavoriteLanguage(e.target.value)}
					f
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
