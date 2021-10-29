import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://boiling-shelf-94607.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h2 className="text-center">Our Services</h2>

            <div className="row g-4">
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                        ></SingleService> )
                }
            </div>
        </div>
    );
};

export default Services;