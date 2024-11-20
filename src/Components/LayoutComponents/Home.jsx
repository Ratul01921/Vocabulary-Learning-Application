import React from 'react';
import Banner from '../Banner';
import HomeAbout from '../HomeAbout';
import SuccessSection from '../SuccessSection';
import Features from '../Features';
import DayliChallange from '../DayliChallange';

const Home = () => {
    return (
        <div className='my-8'>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <SuccessSection></SuccessSection>
            <DayliChallange></DayliChallange>
            <Features></Features>
        </div>
    );
};

export default Home;