
import React from 'react';
import image1 from '../../img/image 1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className="col-lg-6 col-12 mt-5">
                       <span className='bg-danger text-light rounded-pill p-2 m-2'>More Than faster</span>
                        <p className='groceries-text'>Groceries <br /> delivered in as <br /> little as <span className='text-danger'>2 hours</span></p>
                        <p>Grocen atssures fresh grocery every morning to your <br /> family without getting out in this pandemic.</p>
                       <button className='bg-danger text-white rounded-pill w-25 p-1 border-danger'>Order Now</button>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={image1} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;