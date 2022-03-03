import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, _id, image, description, price } = service;
    // const history = useHistory();

    // const handleClick = () => {
    //     history.push(`/booking/${_id}`)
    // }
    // console.log(history);
    return (
        <div className="col" data-aos="zoom-out-up" data-aos-duration="1000">
            <div className="card">
                <img src={image} className="w-100" alt="img" />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h5>Price: ${price}</h5>
                    <Link to={`/order/${_id}`}>
                        <button type="button" className="btn btn-outline-success">Order Now</button>
                    </Link>
                </div>
            </div>
            
        </div >
    );
};

export default Service;