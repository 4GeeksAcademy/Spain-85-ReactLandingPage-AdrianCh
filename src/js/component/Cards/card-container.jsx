import React from "react";
import {Card, randomEndNumber} from "./card.jsx";

const CardContainer = () => {
    
    return (
        <>
        <div className="card-container container-fluid px-5 col-xxl-10">
			<div className="row flex-wrap mx-auto">
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
