import React from "react";
import './Newsteller.css';

const Newsteller = () => {
  return (
    <>
      <div className="newsteller">
        <div className="container">
          <h2 className="text-center text-white">
            Subscribe to our newsletter
          </h2>

          <div className="subscribe">
            <div className="input-group w-75 mx-auto my-5">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
                aria-label="Enter Your Email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary text-white fw-bolder"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsteller;
