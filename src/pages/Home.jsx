import React from 'react';
import Hero from '../components/home/Hero';
import RecentProducts from '../components/home/RecentProducts';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Hero />
        <RecentProducts />
      </div>
    </>
  );
};

export default Home;
