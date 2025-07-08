import { Button, Col, Row } from 'antd';
import React from 'react';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';

const products = [
  {
    key: '1',
    image: img1,
    title:
      'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
    price: 'Rs.200',
  },
  {
    key: '2',
    image: img2,
    title: 'Colgate Triple Action Toothpaste 100ml',
    price: 'Rs.150',
  },
  {
    key: '3',
    image: img3,
    title: 'Breeze Toilet Tissue Soft White 24 Roll',
    price: 'Rs.570',
  },
  {
    key: '4',
    image: img4,
    title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
    price: 'Rs.450',
  },
];

const RecentProducts = () => {
  return (
    <>
      <div className='block products'>
        <h2>Recent Products</h2>

        <Row gutter={24}>
          {products.map((product) => {
            return (
              <Col lg={6} key={product.key}>
                <div className='content'>
                  <div className='image'>
                    <img src={product.image} alt={`product-${product.key}`} />
                  </div>

                  <h3>{product.title}</h3>
                  <div className='price'>{product.price}</div>
                  <Button variant='solid' color='cyan'>
                    Add to basket
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default RecentProducts;
