import React, { useState } from "react";
//State is not merged but overwritten, you must pass all values state needs or break state into multiple seperate "state's"
export default function BadForm() {
	const [state, setState] = useState({
		name: "",
		favColor: "",
		favoriteLanguage: "",
		submittedData: null
	});

	const { name, favColor, favoriteLanguage, submittedData } = state;

	function submitForm(e) {
		e.preventDefault();
		setState({
			name: "",
			favColor: "",
			favoriteLanguage: "",
			submittedData: {
				name: name,
				favColor: favColor,
				favoriteLanguage: favoriteLanguage
			}
		});
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
					onChange={(e) =>
						setState({ ...state, name: e.target.value })
					}
				/>
				<input
					placeholder="favColor"
					value={favColor}
					onChange={(e) =>
						setState({ ...state, favColor: e.target.value })
					}
				/>
				<input
					placeholder="favoriteLanguage"
					value={favoriteLanguage}
					onChange={(e) =>
						setState({ ...state, favoriteLanguage: e.target.value })
					}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
