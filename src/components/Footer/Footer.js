import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <div className='container mt-5 pt-5 text-center'>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className='food-corner'>Food <span className='text-danger'>Corner</span></h4>
                        <p>Best cooks and best delivery guys all <br /> at your service. Hot tasty food will <br /> reach you in sixty minutes</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4>Company</h4>
                        <h6>About Us</h6>
                        <h6>Career</h6>
                        <h6>Blog</h6>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4>Food Corner</h4>
                        <h6>Why Food Corner</h6>
                        <h6>How it works</h6>
                        <h6>Why choose us</h6>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4>Menu</h4>
                        <h6>Why Food Corner</h6>
                        <h6>How it works</h6>
                        <h6>Why choose us</h6>
                    </div>
                </div>
                <p className="text-center mb-0 mt-3">© copyrights 2021. All rights reserved by <span className='food-corner'>Food <span className='text-danger'>Corner</span></span></p>
            </div>
        </div>
    );
};

export default Footer;