
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../img/image 1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className="col-lg-6 col-12 mt-5">
                        <span className='bg-danger text-light rounded-pill p-2 m-2'>More Than faster</span>
                        <p className='groceries-text'>We provide<br /> delivery with in<br /><span className='text-danger'>30 min</span></p>
                        <p>Imagine you dont need a diet because we provide <br /> delicious and healthy food for you.</p>
                        <Link to="/services"><button className='bg-danger text-white rounded-pill w-25 p-1 border-danger' data-aos="zoom-in" data-aos-duration="1000">Order Now</button></Link>
                    </div>
                    <div className="col-lg-6 col-12" data-aos="fade-down" data-aos-duration="3000">
                        <img src={image1} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;