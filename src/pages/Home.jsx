import React from 'react';
import Hero from '../components/home/Hero';
import RecentProducts from '../components/home/RecentProducts';
import Information from '../components/home/Information';
import ProductCategories from '../components/home/ProductCategories';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Hero />
        <RecentProducts />
        <Information />
        <ProductCategories />
      </div>
    </>
  );
};

export default Home;
