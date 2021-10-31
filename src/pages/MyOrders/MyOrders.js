import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import OrdersList from "./OrdersList/OrdersList";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://boiling-shelf-94607.herokuapp.com/myorders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);
//   console.log(myOrders);
  return (
    <div className="container">
      <h2 className="text-center my-4">Your Order List</h2>
      <div className="row">
      {
          myOrders.map(myOrder => <OrdersList
            key={myOrder._id}
            myOrder={myOrder}
            ></OrdersList>)
      }
      </div>
    </div>
  );
};

export default MyOrders;
