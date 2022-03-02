import React from 'react';
import { Link } from 'react-router-dom';
import imgcard from '../../img/imagecard.png'

const Delivery = () => {
    return (
        <div className='container'>
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6">
                    <p className='text-warning fw-bold'>Home Delivery</p>
                    <h1 className='fw-bold'>Sit at Home We Will Take <br /> Care Your Order</h1>
                    <p>We store the vast majority of the <br /> digital assets in secure</p>
                    <Link to="/services"><button className='bg-danger text-white rounded-pill w-25 p-1 border-danger' data-aos="zoom-in" data-aos-duration="1000">Order Now</button></Link>
                </div>
                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                    <img src={imgcard} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Delivery;