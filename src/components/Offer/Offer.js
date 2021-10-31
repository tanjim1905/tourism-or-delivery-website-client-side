import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="offer-main">
            <div className="container">
                <div className="offer-container ms-auto">
                    <span className="offer-price text-success">15%</span> <span className="text-secondary discount">Cash Back</span>
                    <h1>For bKash</h1>
                    <p>Instant 15% Cash Back for cash out with bKash app.  These offers are usually limited in time and have special application conditions you have to meet to get the money.</p>
                    <div className="btn btn-success fw-bold">Read more...</div>
                </div>
            </div>
        </div>
    );
};

export default Offer;