import React from "react";
import {Card, randomEndNumber} from "./card.jsx";

const CardContainer = () => {
    
    return (
        <>
        <div className="card-container container-fluid px-5">
			<div className="row d-flex justify-content-around">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
		</div>
        </>
    );
};

export default CardContainer;
