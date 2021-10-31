import React, { useState } from "react";

const OrdersList = (props) => {
  // console.log(props);
  const { title, imgUrl, details, status } = props.myOrder.order;
  const [isDelete, setIsDelete] = useState(null);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to Delete this product?"
    );
    if (proceed) {
      fetch(`https://boiling-shelf-94607.herokuapp.com/deletemyorder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
        });
    }
  };

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
                <button className="btn btn-success me-2 fw-bold">
                  {props.myOrder.status}
                </button>
                <button
                  onClick={() => handleDelete(props.myOrder._id)}
                  className="btn btn-danger fw-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
