import React from "react";
import { useState } from "react";

// Imported Components
import {NavBar} from "./Navbar/nav-bar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardContainer from "./Cards/card-container.jsx";
import Footer from "./footer.jsx"


//Main App component
const Home = () => {
	const [theme, setTheme] = useState("light")
	return (
		<>
		<NavBar theme = {theme} setTheme={setTheme}/>
		<Jumbotron theme = {theme}/>
		<CardContainer theme = {theme}/>
		<Footer theme = {theme}/>
		</>
	);
};

export default Home;
