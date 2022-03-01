import React from 'react';
import imgcard from '../../img/imagecard.png'

const Delivery = () => {
    return (
        <div className='container'>
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6">
                    <p className='text-warning fw-bold'>Home Delivery</p>
                    <h1 className='fw-bold'>Sit at Home We Will Take <br /> Care Your Order</h1>
                    <p>We store the vast majority of the <br /> digital assets in secure</p>
                    <button className='bg-danger text-white rounded-pill w-25 p-1 border-danger'>Order Now</button>
                </div>
                <div className="col-lg-6">
                    <img src={imgcard} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Delivery;