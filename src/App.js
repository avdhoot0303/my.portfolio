import React, { useState } from 'react';
import { Layout, Row, Col, Switch, theme } from 'antd';
import WelcomeCard from './components/WelcomeCard';
import TabbedCard from './components/TabbedCard';
import Footer from './components/Footer';
import './App.css'

const { Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* // <Content  theme = {'light'} style={{ margin: '0 16px'  }} > */}
        <div id="home" style={{ padding: 24, minHeight: 360, background: '#FFF9C4', alignItems: 'center' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <WelcomeCard  />
            </Col>
            <Col xs={24} md={16}>
              <TabbedCard />
            </Col>

          </Row>
        </div>
      {/* // </Content> */}
      <Footer  />
     </Layout>
  );
};

export default App;
