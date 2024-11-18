import React from "react";
import {Card, randomEndNumber} from "./card.jsx";

const CardContainer = ({theme}) => {
    
    return (
        <> 
        <div className= {`pb-5 ${theme === "dark" ? "bg-dark text-white" : ""}`} data-bs-theme={theme}>
            <div className={`card-container container-fluid px-5 py-5`} >
                <div className="row flex-wrap mx-auto">
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                    <Card theme = {theme}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default CardContainer;
