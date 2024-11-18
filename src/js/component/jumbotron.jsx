import React from "react";

const Jumbotron = ({theme}) => {

    return (
        <>
        <div className={`p-5 border-secondary border-bottom ${theme === "dark" ? "bg-dark text-white" : ""}`}>
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia fuga mollitia sed, ipsum blanditiis nostrum dolorum cupiditate repudiandae, esse aliquid incidunt sunt magnam a expedita dicta neque corrupti. Deleniti?</p>
                <button className={`btn btn-${theme === "dark" ? "outline-secondary" : "dark"} btn-lg`} type="button">Call to action!</button>
            </div>
        </div>
        
        </>
    );
};

export default Jumbotron;
