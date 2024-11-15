import React from "react";
import { useState } from "react";

import Brand from "./Brand";
import CollapseButton from "./CollapseButton";

let theme;

const NavBar = () => {
    const [theme, setTheme] = useState("light")
    let themeIcon = () =>{
        if (theme === "light") return "fa-sun";
        if (theme === "dark") return "fa-moon";
        if (theme === "auto") return "fa-circle-half-stroke";
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={theme}>
            <Brand />
            <CollapseButton />
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasNavbarLabel" >
                        Menu
                    </h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body justify-content-end me-3" >
                    <ul className="navbar-nav fs-5 gap-2" >
                        <li className="nav-item" >
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="#" >About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Contact</a>
                        </li>
                        <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black" ></div>
                            <hr className="d-lg-none mt-2 mb-0 text-black-50" />
                        </li>
                        <li className="nav-item dropdown" >
                            <button type="button" className="nav-link dropdown-toggle rounded p-2 d-flex align-items-center mt-1" href="#" data-bs-toggle="dropdown" aria-expanded="false" >
                                <i className={`fa-solid ${themeIcon()} align-content-center`} ></i>
                                <p className="d-lg-none ms-2 my-1" >Toggle Theme</p>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end gap-3 p-1" >
                                <li>
                                    <button type="button" className={`dropdown-item d-flex align-items-center rounded-2 ${theme === "light" ? "active": ""}`} aria-pressed="true" onClick={() => setTheme("light") } >
                                        <i className="fa-solid fa-sun me-2 opacity-50" ></i>
                                        Light
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className={`dropdown-item d-flex align-items-center rounded-2 ${theme === "dark" ? "active": ""}`} aria-pressed="false" onClick={() => setTheme("dark") } >
                                        <i className="fa-solid fa-moon me-2 opacity-50" ></i>
                                        Dark
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className={`dropdown-item d-flex align-items-center rounded-2 ${theme === "auto" ? "active": ""}`} aria-pressed="false" onClick={() => setTheme("auto") } >
                                        <i className="fa-solid fa-circle-half-stroke me-2 opacity-50" ></i>
                                        Auto
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export{NavBar, theme} ;
