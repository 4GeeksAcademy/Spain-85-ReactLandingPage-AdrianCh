import React from "react";

let randomEndNumber = 0;

const Card = ({theme}) => {
    function randomPicture() {
        randomEndNumber++;
        return `https://picsum.photos/500/325?random=${randomEndNumber}`;
    }
    return (
        <>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mt-5">
            <div className="card p-0">
                <img src= {randomPicture()} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <hr />
                    <div className="d-flex">
                        <a href="#" className={`btn btn-${theme === "dark" ? "outline-secondary" : "dark"} mx-auto`}>Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export {Card, randomEndNumber};
     