import { Button, Col, Dropdown, Row } from 'antd';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';

const products = [
  {
    key: '1',
    image: img1,
    title:
      'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
    price: '£2.00',
  },
  {
    key: '2',
    image: img2,
    title: 'Colgate Triple Action Toothpaste 100ml',
    price: '£1.50',
  },
  {
    key: '3',
    image: img3,
    title: 'Breeze Toilet Tissue Soft White 24 Roll',
    price: '£5.70',
  },
  {
    key: '4',
    image: img4,
    title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
    price: '£4.50',
  },
  {
    key: '5',
    image: img5,
    title: 'Glens Vodka 70cl Extra smooth',
    saleprice: '£20.00',
    price: '£15.50',
  },
  {
    key: '6',
    image: img6,
    title: 'Pot Noodle Chicken & Mushroom Standard 90g',
    saleprice: '£1.50',
    price: '£0.90',
  },
  {
    key: '7',
    image: img7,
    title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
    saleprice: '£2.00',
    price: '£1.50',
  },
  {
    key: '8',
    image: img8,
    title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
    saleprice: '£3.00',
    price: '£2.50',
  },
];

const items = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        Featured
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        Price: Low to High
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        Price: High to Low
      </a>
    ),
  },
];

const Shop = () => {
  return (
    <>
      <div className='block products shopPage'>
        <div className='container'>
          <div className='titleHolder'>
            <h1>Shop</h1>

            <Dropdown menu={{ items }} placement='bottom' arrow>
              <Button>Sort by</Button>
            </Dropdown>
          </div>

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
      </div>
    </>
  );
};

export default Shop;
