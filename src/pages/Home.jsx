import React from 'react';
import Hero from '../components/home/Hero';
import RecentProducts from '../components/home/RecentProducts';
import Information from '../components/home/Information';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Hero />
        <RecentProducts />
        <Information />
      </div>
    </>
  );
};

export default Home;
