import React from 'react';

const Service = ({ service }) => {
    const { name, image, description } = service;
    return (
        <div className="col">
            <div className="card">
                <img src={image} classNameName="w-100" alt="img" />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button type="button" className="btn btn-outline-success">Order Now</button>
                </div>

            </div>
        </div>
    );
};

export default Service;