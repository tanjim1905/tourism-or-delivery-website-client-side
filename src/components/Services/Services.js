import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleService from "./SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services.length);

  useEffect(() => {
    fetch("https://boiling-shelf-94607.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  
  if(services.length === 0){
    return (<div
        className="d-flex justify-content-center align-items-center mt-5"
      
      >
        <Spinner animation="border" variant="info" />
      </div>)
  }
  return (
    <div className="container my-5">
      <h2 className="text-center">Our Services</h2>
      <p className="px-5 text-center">We offer the full spectrum of services to help organizations work better. Everything from creating standards of excellence to training your people to work in more effective ways, assessing how you’re doing, and helping you perform even better in future.</p>

      <div className="row g-4">
        {services.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;