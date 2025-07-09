import { Col, Row } from 'antd';
import React from 'react';
import img9 from '../../assets/images/img9.jpg';
import img10 from '../../assets/images/img10.jpg';
import img11 from '../../assets/images/img11.jpg';
import img12 from '../../assets/images/img9.jpg';

const products = [
  {
    key: '1',
    image: img9,
  },
  {
    key: '2',
    image: img10,
  },
  {
    key: '3',
    image: img11,
  },
  {
    key: '4',
    image: img12,
  },
];

const TopBrands = () => {
  return (
    <>
      <div className='block products'>
        <h2>Top Brands</h2>
      </div>

      <Row gutter={24}>
        {products.map((product) => {
          return (
            <Col sm={6} key={product.key}>
              <div className='content'>
                <div className='image'>
                  <img src={product.image} />
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default TopBrands;
