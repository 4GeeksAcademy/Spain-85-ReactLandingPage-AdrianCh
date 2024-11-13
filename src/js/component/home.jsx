import React from "react";

// Imported Components
import NavBar from "./nav-bar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardContainer from "./card-container.jsx";
import Footer from "./footer.jsx"

//Main App component
const Home = () => {
	return (
		<>
		<NavBar/>
		<Jumbotron/>
		<CardContainer/>
		<Footer/>
		</>
	);
};

export default Home;
