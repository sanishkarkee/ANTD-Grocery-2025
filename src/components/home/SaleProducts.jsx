import { Button, Col, Row } from 'antd';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/img7.jpg';
import img8 from '../../assets/images/img8.jpg';

const products = [
  {
    key: '1',
    image: img5,
    title: 'Glens Vodka 70cl Extra smooth',
    saleprice: '£20.00',
    price: '£15.50',
  },
  {
    key: '2',
    image: img6,
    title: 'Pot Noodle Chicken & Mushroom Standard 90g',
    saleprice: '£1.50',
    price: '£0.90',
  },
  {
    key: '3',
    image: img7,
    title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
    saleprice: '£2.00',
    price: '£1.50',
  },
  {
    key: '4',
    image: img8,
    title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
    saleprice: '£3.00',
    price: '£2.50',
  },
];

const SaleProducts = () => {
  return (
    <>
      <div className='block products'>
        <h2>Sale Products</h2>

        <Row gutter={24}>
          {products.map((product) => {
            return (
              <Col lg={6} key={product.key}>
                <div className='content'>
                  <div className='image'>
                    <img src={product.image} alt={`product-${product.key}`} />
                  </div>

                  <h3>{product.title}</h3>
                  <div className='price'>
                    <span className='salePrice'>{product.saleprice}</span>
                    {product.price}
                  </div>
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

export default SaleProducts;
