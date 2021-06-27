import React from "react";
import NavBar from "../components/NavBar";
import Animation from "../components/Animation";
import Features from "../components/Features";
import Car from "../components/Car";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className='app'>
			<NavBar />
			<Animation />
			<Features />
			<Car />
			<Pricing />
			<Footer/>
		</div>
	);
};

export default App;
