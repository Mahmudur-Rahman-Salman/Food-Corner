import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Delivery></Delivery>
        </div>
    );
};

export default Home;