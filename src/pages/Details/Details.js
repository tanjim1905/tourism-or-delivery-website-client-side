import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Details = () => {
  const {user} = useAuth();
  // console.log(user);
  const [details, setDetails] = useState([]);
  const [singleDetails, setSingleDetails] = useState([]);
  // console.log(singleDetails);
  const { serviceId } = useParams();
  useEffect(() => {
    fetch("https://boiling-shelf-94607.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const matchData = details.find((detail) => detail._id === serviceId);
    setSingleDetails(matchData);
  }, [details]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.order = singleDetails;
    data.status = 'Pending';
    fetch('http://localhost:7000/orders', {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.insertedId);
    })
    console.log(data);
  }
  return (
    <>
      <div className="container">
        <div className="card mb-3 mx-auto" style={{ maxWidth: "80%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={singleDetails?.imgUrl}
                className="img-fluid h-100 w-100 rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{singleDetails?.title}</h5>
                <p className="card-text">{singleDetails?.details}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div>
        <h2>Send Your Information</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={user.displayName} {...register("name")} /> <br />
          <input defaultValue={user.email} {...register("email", { required: true })} /> <br />
          <input placeholder="Mobile Number" type="number" {...register("phone", { required: true })} /> <br />
          <input placeholder="Your Address" {...register("address", { required: true })} /> <br />
          <input type="submit" />
        </form>
        </div>
      </div>
    </>
  );
};

export default Details;
