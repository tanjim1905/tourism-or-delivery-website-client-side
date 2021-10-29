import React from 'react';

const SingleService = (props) => {
    const {title, imgUrl, description} = props.service;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card" style={{width: "18rem"}}>
            <img src={imgUrl} style={{height: "180px"}} className="card-img-top offset" alt="..."/>
                <div className="card-body" style={{height: "250px"}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;