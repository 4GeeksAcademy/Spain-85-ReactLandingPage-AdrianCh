import React from "react";

const Footer = ({theme}) => {
    
    return (
        <>
        <div className={` border-secondary border-top  ${theme === "dark" ? "bg-dark" : ""}`} >
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-5" >
                <div className= {`col-md-4 d-flex align-items-center text-${theme === "dark" ? "secondary" : "muted"}`}>
                    <a href="https://getbootstrap.com/" className="me-2 mb-md-0 ">
                        <i className="fa-brands fa-bootstrap fa-2x"></i>
                    </a>
                    <span className="mb-md-0 d-none d-md-block">© 2024 Company, Inc</span>
                </div>
                <div className={`col-md-4 d-flex align-items-center text-${theme === "dark" ? "secondary" : "muted"}`}>
                    <a href="https://react.dev/" className="me-2 mb-md-0 " >
                        <i className="fa-brands fa-react fa-2x"></i>
                    </a>
                    <span className="mb-md-0 d-none d-md-block">© 2024 Company, Inc</span>
                </div>

                <div className="nav justify-content-end">
                    <a className={`nav-link ms-2 text-${theme === "dark" ? "secondary" : "muted"}`} href="https://x.com/"><i className="fa-brands fa-square-x-twitter fa-2x"></i></a>
                    <a className={`nav-link ms-2 text-${theme === "dark" ? "secondary" : "muted"}`} href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram fa-2x"></i></a>
                    <a className={`nav-link ms-2 text-${theme === "dark" ? "secondary" : "muted"}`} href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook fa-2x"></i></a>
                </div>
            </footer>
        </div>
        </>     
    );
};

export default Footer;
