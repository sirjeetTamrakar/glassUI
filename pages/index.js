import React from "react";
import NavBar from "../components/NavBar";
import Animation from "../components/Animation";
import Car from "../components/Car";
import Pricing from "../components/Pricing";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className='app'>
			<NavBar />
			<Animation />
			<Car />
			<Pricing/>
		</div>
	);
};

export default App;
