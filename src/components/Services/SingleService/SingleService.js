import React from 'react';
import { useHistory } from 'react-router';

const SingleService = (props) => {
    const {_id, title, imgUrl, description} = props.service;
    // const {serviceId} = useParams();
    // console.log(_id);
    const history = useHistory();
    const handleDetails = (id) => {
        const uri = `/details/${id}`;
        history.push(uri);
    }
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
            <img src={imgUrl} style={{height: "200px"}} className="card-img-top p-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text py-2" style={{height: '150px'}}>{description}</p>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => handleDetails(_id)} className="btn btn-success w-50 py-2 fw-bold text-center rounded text-uppercase cursor-pointer">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;