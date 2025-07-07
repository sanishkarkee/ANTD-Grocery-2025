import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Shop from '../pages/Shop';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/shop' element={<Shop />}></Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
