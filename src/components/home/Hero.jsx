import { Carousel, Col, Row } from 'antd';
import image1 from '../../assets/images/banner-img1.jpg';
import image2 from '../../assets/images/banner-img2.jpg';
import image3 from '../../assets/images/banner-img3.jpg';

const Hero = () => {
  return (
    <>
      <div className='heroBlock'>
        <Row gutter={24}>
          {/* Carousel */}
          <Col lg={18}>
            <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
              <div>
                <img src={image1} alt='Image-1' />
              </div>
              <div>
                <img src={image2} alt='Image-2' />
              </div>
              <div>
                <img src={image3} alt='Image-3' />
              </div>
            </Carousel>
          </Col>

          {/* Information */}
          <Col lg={6}>
            <div className='heroBlocks'>
              <div className='holder'>
                <div className='icon'>
                  <i class='fa-solid fa-truck'></i>
                </div>

                <div className='content'>
                  <h3>Free shipping and return</h3>
                  <p>Free shipping on orders over £20</p>
                </div>
              </div>

              <div className='holder'>
                <div className='icon'>
                  <i class='fa-solid fa-sack-dollar'></i>
                </div>

                <div className='content'>
                  <h3>Money Back Guarantee</h3>
                  <p>100% money back guarantee</p>
                </div>
              </div>

              <div className='holder'>
                <div className='icon'>
                  <i class='fa-solid fa-headset'></i>
                </div>

                <div className='content'>
                  <h3>Online Support 24/7</h3>
                  <p>Excepteur sint occaecat cupidatat</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;

// NOTE:
// This page is for Carousel, mainly content of the <Home/> component
