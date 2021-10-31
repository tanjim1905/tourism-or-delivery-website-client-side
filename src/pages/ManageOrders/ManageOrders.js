import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    useEffect( () => {
        fetch("http://localhost:7000/orderscollection")
        .then(res => res.json())
        .then(data => {
            setManageOrders(data);
        })
    }, [])
    console.log(manageOrders);
    return (
        <div>
            <h2>This is ManageOrders</h2>

            {
                manageOrders.map(myOrder => <div>
                    <h2>{myOrder?.name}</h2>
            <p>{myOrder?.email}</p>
            <p>{myOrder?.order?.title}</p>
            <p></p>
            <p></p>
            <p></p>
                    
                    </div>)
            }
        </div>
    );
};

export default ManageOrders;