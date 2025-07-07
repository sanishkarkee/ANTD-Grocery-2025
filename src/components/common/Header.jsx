import React from 'react';
import {
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  MobileOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <>
      <div className='container'>
        {/* Top-Bar */}
        <div className='topBar'>
          <div className='contactInfo'>
            <ul>
              <li>
                <a href='tel:07450223366'>
                  <span>
                    <MobileOutlined />
                    07450223366
                  </span>
                </a>
              </li>
              <li>
                <a href='mailto:contact@grocery.co.uk'>
                  <span>
                    <MailOutlined />
                    contact@grocery.co.uk
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className='otherInfo'>
            <ul className='socialMedia'>
              <li>
                <a href='www.facebook.com'>
                  <FacebookFilled />
                </a>
              </li>
              <li>
                <a href='www.twitter.com'>
                  <TwitterSquareFilled />
                </a>
              </li>
              <li>
                <a href='www.instagram.com'>
                  <InstagramFilled />
                </a>
              </li>
            </ul>

            <button>
              <UserOutlined />
              My Account
            </button>
          </div>
        </div>

        {/* Header */}
        <div className='header separator'>
          <div className='logo'>BigMart</div>

          <nav>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='about'>About</NavLink>
              </li>
              <li>
                <NavLink to='contact'>Contact</NavLink>
              </li>
              <li>
                <NavLink to='faq'>FAQ</NavLink>
              </li>
              <li>
                <NavLink to='shop'>Shop</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
