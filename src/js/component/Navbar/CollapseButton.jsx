import React from "react";

const CollapseButton = () => {
    return(
    <>
    <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    </>
    );
};

export default CollapseButton;