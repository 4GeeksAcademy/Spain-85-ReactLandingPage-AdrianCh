import React from "react";

// Imported Components
import {NavBar, theme} from "./Navbar/nav-bar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardContainer from "./Cards/card-container.jsx";
import Footer from "./footer.jsx"

//Main App component
const Home = () => {
	return (
		<>
		<NavBar />
		<Jumbotron/>
		<CardContainer/>
		<Footer/>
		</>
	);
};

export default Home;
