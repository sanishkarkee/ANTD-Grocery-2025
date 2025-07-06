import React from 'react';
const { Header, Content, Footer } = Layout;
import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/common/Header';

function App() {
  return (
    <>
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
