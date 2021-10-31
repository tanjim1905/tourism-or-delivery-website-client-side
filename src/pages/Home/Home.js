import React from 'react';
import Banner from '../../components/Banner/Banner';
import Offer from '../../components/Offer/Offer';
import Services from '../../components/Services/Services';
import Teams from '../../components/Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
            <Teams></Teams>
        </div>
    );
};

export default Home;