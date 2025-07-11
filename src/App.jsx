const { Header, Content, Footer } = Layout;
import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/common/Header';
import AppRoutes from './routes/AppRoutes';
import FooterWidget from './components/common/FooterWidget';
import FooterCopyRight from './components/common/FooterCopyRight';

function App() {
  return (
    <>
      <Layout>
        <Header>
          <AppHeader />
        </Header>

        <Content>
          <AppRoutes />
        </Content>

        <Footer>
          <FooterWidget />
          <FooterCopyRight />
        </Footer>
      </Layout>
    </>
  );
}

export default App;

// NOTE:
// 1) Why are we importing ROUTE only in <Content></Content> :
// Header: stays the same on every page
// Content: changes depending on the route
// Footer: stays the same on every page
