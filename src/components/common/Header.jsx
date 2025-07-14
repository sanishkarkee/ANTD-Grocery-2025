import React, { useState } from 'react';
import {
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  MenuOutlined,
  MobileOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Button, Drawer } from 'antd';

const AppHeader = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

          <nav className='mobileHidden'>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='about'>About</NavLink>
              </li>
              <li>
                <NavLink to='shop'>Shop</NavLink>
              </li>
              <li>
                <NavLink to='faq'>FAQ</NavLink>
              </li>
              <li>
                <NavLink to='contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className='mobileVisible'>
            <MenuOutlined onClick={showDrawer} />

            <Drawer
              title='BigMart'
              placement='left'
              closable={{ 'aria-label': 'Close Button' }}
              onClose={onClose}
              open={open}
            >
              <nav>
                <ul>
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='about'>About</NavLink>
                  </li>
                  <li>
                    <NavLink to='shop'>Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to='faq'>FAQ</NavLink>
                  </li>
                  <li>
                    <NavLink to='contact'>Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
