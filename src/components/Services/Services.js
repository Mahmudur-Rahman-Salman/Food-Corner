import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className='container'>
            <h2 className='p-5 text-center fw-bold'>Order Your Food</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;