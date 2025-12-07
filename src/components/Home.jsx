import React from 'react';
import Hero from './Hero';
import InfoSection from './InfoSection';
import Membership from './Membership';
import Testimonials from './JoinTeam';

const Home = () => {
    return (
        <>
            <Hero />
            <InfoSection />
            <Membership />
            <Testimonials />
        </>
    );
};

export default Home;
