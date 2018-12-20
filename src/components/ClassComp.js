import React, { Component } from "react";

export default class ClassComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		};
	}

	render() {
		const { count } = this.state;
		return (
			<div className="example">
				<h1>Normal Class Component</h1>
				<h2>{count}</h2>

				<button
					onClick={() =>
						this.setState({
							count: count - 1
						})
					}>
					Decremement
				</button>
				<button
					onClick={() =>
						this.setState({
							count: count + 1
						})
					}>
					Increment
				</button>
			</div>
		);
	}
}
