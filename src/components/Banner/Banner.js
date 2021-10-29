import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="">
                        <h1>Best On-Time</h1>
                        <h2>Courier Services</h2>
                        <div className="btn btn-danger">Book Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;