import React from "react";
import NavBar from "../components/NavBar";
import Animation from "../components/Animation";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className='app'>
			<NavBar />
			<Animation />
		</div>
	);
};

export default App;
