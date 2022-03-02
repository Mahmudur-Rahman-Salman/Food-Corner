import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, _id, image, description } = service;
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
                    <Link to={`/booking/${_id}`}>
                        <button type="button" className="btn btn-outline-success">Order Now</button>
                    </Link>
                    {/* <button type="button" onClick={handleClick} className="btn btn-outline-success">Order Now</button> */}

                </div>

            </div>
        </div >
    );
};

export default Service;