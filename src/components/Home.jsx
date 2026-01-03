import React from 'react';
import Hero from './Hero';
import InfoSection from './InfoSection';
import Services from './Services';
import Gallery from './Gallery';
import Membership from './Membership';
import Testimonials from './JoinTeam';

const Home = () => {
    return (
        <>
            <Hero />
            <InfoSection />
            <Services />
            <Gallery />
            <Membership />
            <Testimonials />
        </>
    );
};

export default Home;
