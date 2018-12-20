import React, { Component, useState } from "react";
import "./App.scss";
import HookComp from "./components/HookComp";
import ClassComp from "./components/ClassComp";
import EffectExample from "./components/EffectExample";
import BadForm from "./components/BadForm";
import GoodForm from "./components/GoodForm";
import Display from "./components/Display";
class App extends Component {
	render() {
		return (
			<div className="App">
				<ClassComp />
				<HookComp />
				<EffectExample />
				<BadForm />
				<GoodForm />
				<Display />
			</div>
		);
	}
}

export default App;
