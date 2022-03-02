import React from 'react';
import { Link } from 'react-router-dom';
import imageCard from '../../img/image and card.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className="col-lg-6 col-12" data-aos="fade-right" data-aos-duration="3000">
                        <img src={imageCard} className="w-100" alt="" />
                    </div>
                    <div className="col-lg-6 col-12">
                        <p className='text-success fw-bold'>Why Choose Us</p>
                        <p className='food-title'>We like good food</p>
                        <p>We have local teams dedicated to finding the best food in your city—whether that's spaghetti carbonara or a really good burger—so you can get the coolest restaurants brought right to you.</p>
                        <Link to="/services"><button className='bg-danger text-white rounded-pill w-25 p-1 border-danger' data-aos="zoom-in" data-aos-duration="1000">Order Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;