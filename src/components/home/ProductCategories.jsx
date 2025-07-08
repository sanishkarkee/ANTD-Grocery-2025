import { Col, Row } from 'antd';
import React from 'react';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/img7.jpg';
import img8 from '../../assets/images/img8.jpg';
import img9 from '../../assets/images/img9.jpg';
import img10 from '../../assets/images/img10.jpg';
import img11 from '../../assets/images/img11.jpg';
import img12 from '../../assets/images/img12.jpg';

const productCategories = [
  {
    key: '1',
    image: img1,
    title: 'Frozen',
  },
  {
    key: '2',
    image: img2,
    title: 'Fresh',
  },
  {
    key: '3',
    image: img3,
    title: 'Food Cupboard',
  },
  {
    key: '4',
    image: img4,
    title: 'Household',
  },
  {
    key: '5',
    image: img5,
    title: 'Drinks',
  },
  {
    key: '6',
    image: img6,
    title: 'Bakery',
  },
  {
    key: '7',
    image: img7,
    title: 'Fresh Fruits',
  },
  {
    key: '8',
    image: img8,
    title: 'Hot Buys',
  },
  {
    key: '9',
    image: img9,
    title: 'Offers',
  },
  {
    key: '10',
    image: img10,
    title: 'Luxury',
  },
  {
    key: '11',
    image: img11,
    title: 'Beers & Wines',
  },
  {
    key: '12',
    image: img12,
    title: 'Christmas',
  },
];

const ProductCategories = () => {
  return (
    <>
      <div className='block productCategories'>
        <h2>Product Categories</h2>
        <Row gutter={[24, 24]}>
          {productCategories.map((products) => {
            return (
              <Col lg={4} key={products.key}>
                <div className='content'>
                  <div className='image'>
                    <img src={products.image} />
                  </div>
                  <h3>{products.title}</h3>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default ProductCategories;
