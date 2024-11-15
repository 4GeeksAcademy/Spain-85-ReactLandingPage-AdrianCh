import React from "react";

const CollapseButton = () => {
    return(
    <>
    <button
        className="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
    </button>
    </>
    );
};

export default CollapseButton;