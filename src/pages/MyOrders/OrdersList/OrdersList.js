import React from 'react';

const OrdersList = (props) => {
    console.log(props);
    const {title, imgUrl, details} = props.myOrder.order;
    return (
        <div className="">
        <div className="container">
        <div className="card mb-3 mx-auto" style={{ maxWidth: "80%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={imgUrl}
                className="img-fluid h-100 w-100 rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{details}</p>
                <button className="btn btn-success">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default OrdersList;