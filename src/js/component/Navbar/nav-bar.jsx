import React from "react";

import Brand from "./Brand";
import CollapseButton from "./CollapseButton";

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <Brand/>
            <CollapseButton/>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul className="navbar-nav fs-5 gap-2">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                        <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black"></div>
                        <hr className="d-lg-none my-2 text-black-50"/>
                    </li>
                    <li className="nav-item dropdown d-lg-block d-none">
                        <a className="nav-link dropdown-toggle rounded align-content-end p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            <i className="fa-solid fa-circle-half-stroke"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end gap-3 p-1">
                            <li>
                                <button type="button" className="dropdown-item d-flex align-items-center rounded-2 active" aria-pressed="true">
                                    <i className="fa-solid fa-sun bi me-2 opacity-50"></i> 
                                    Light
                                </button>
                            </li>
                            <li>
                                <button type="button" className="dropdown-item d-flex align-items-center rounded-2" aria-pressed="false">
                                    <i className="fa-solid fa-moon bi me-2 opacity-50"></i> 
                                    Dark
                                </button>
                            </li>
                            <li>
                                <button type="button" className="dropdown-item d-flex align-items-center rounded-2" aria-pressed="false">
                                    <i className="fa-solid fa-circle-half-stroke bi me-2 opacity-50"></i> 
                                    Auto
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default NavBar;
