import React from 'react';
import payment from '../../assets/images/payment.png';
import { FloatButton } from 'antd';

const FooterCopyRight = () => {
  return (
    <>
      <div className='footerCopyright'>
        <div className='container'>
          <div className='copyright'>@2022 Created by Bigmart</div>
          <div className='toTop'>
            <img src={payment} alt='payment' />
          </div>
        </div>

        <FloatButton.BackTop />
      </div>
    </>
  );
};

export default FooterCopyRight;
