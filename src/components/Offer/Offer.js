import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="offer-main">
            <div className="container">
                <div className="offer-container ms-auto">
                    <span className="offer-price text-success">15%</span> <span className="text-secondary discount">Cash Back</span>
                    <h1>For Bkash</h1>
                    <p>Good Health Sale is live exclusively for Care Plan members. Book lab tests from home and off for 30%.</p>
                    <div className="btn btn-success fw-bold">Read more...</div>
                </div>
            </div>
        </div>
    );
};

export default Offer;