import React from 'react';
import Banner from '../Banner';
import HomeAbout from '../HomeAbout';
import SuccessSection from '../SuccessSection';

const Home = () => {
    return (
        <div className='my-8'>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <SuccessSection></SuccessSection>
        </div>
    );
};

export default Home;