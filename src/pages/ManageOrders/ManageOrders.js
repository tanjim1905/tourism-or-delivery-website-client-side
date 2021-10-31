import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch("https://boiling-shelf-94607.herokuapp.com/orderscollection")
      .then((res) => res.json())
      .then((data) => {
        setManageOrders(data);
      });
  }, [isDelete]);

  const handleStatus = (id) => {
    fetch(`https://boiling-shelf-94607.herokuapp.com/updatestatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(),
    })
    .then(res => res.json())
    .then(data => {
      
    })
  };

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm('Are you sure, You want to Delete this product?');
    if(proceed){
      fetch(`https://boiling-shelf-94607.herokuapp.com/deleteorder/${id}`, {
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
    console.log(id);
  };
  console.log(manageOrders);

  return (
    <div className="container my-3">
      <h2 className="text-center bg-dark text-white py-3">
        Here is All Orders List
      </h2>

      <div className="row g-4">
        {manageOrders.map((manageOrder) => (
          <div className="col-12 col-md-6 col col-lg-4">
          <div class="card" style={{ width: "18rem" }}>
          <img src={manageOrder?.order.imgUrl} alt="" />
            <div class="card-body text-center">
              <h5 class="card-title"><span className="fw-bold"></span> {manageOrder?.order.title}</h5>
              <p class="card-title">{manageOrder?.order?.description}</p>
              <h5 class="card-title">{manageOrder?.name}</h5>

              <h5>Order Status: <span className="text-warning">{manageOrder?.status}</span> </h5>
              <button className="btn btn-success me-2" onClick={() => handleStatus(manageOrder?._id)}>
                Update
              </button>
              <button
                onClick={() => handleDelete(manageOrder?._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
