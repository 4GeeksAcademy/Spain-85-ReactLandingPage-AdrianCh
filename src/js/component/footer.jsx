import React from "react";

const Footer = () => {
    
    return (
        <>
        <hr className="mt-5" />
        <div className="container" >
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="https://getbootstrap.com/" className="me-2 mb-md-0 text-muted">
                        <i className="fa-brands fa-bootstrap fa-2x"></i>
                    </a>
                    <span className="mb-md-0 text-muted d-none d-md-block">© 2024 Company, Inc</span>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                    <a href="https://react.dev/" className="me-2 mb-md-0 text-muted" >
                        <i className="fa-brands fa-react fa-2x"></i>
                    </a>
                    <span className="mb-md-0 text-muted d-none d-md-block">© 2024 Company, Inc</span>
                </div>

                <div className="nav justify-content-end">
                    <a className="nav-link ms-2 text-muted" href="https://x.com/"><i className="fa-brands fa-square-x-twitter fa-2x"></i></a>
                    <a className="nav-link ms-2 text-muted" href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram fa-2x"></i></a>
                    <a className="nav-link ms-2 text-muted" href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook fa-2x"></i></a>
                </div>
            </footer>
        </div>
        </>     
    );
};

export default Footer;
