import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, theme } from 'antd';
import WelcomeCard from './components/WelcomeCard';
import TabbedCard from './components/TabbedCard';
import Footer from './components/Footer';
import { useMediaQuery } from 'react-responsive';
import './App.css';

const { Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  // Media queries for different device sizes
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });


  return (
    <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center', background: '#7AA2E3', position: 'relative' }}>
      <Content
        theme="light"
        style={{
          margin: '25px',
          padding: '20px',
          borderRadius: '18px',
          background: '#ffffff',
          // maxWidth: '1600px',
          width: '95%',          
          position: 'relative',
        }}
      >
        <div className="macos-buttons">
          <span className="macos-button macos-button-red"></span>
          <span className="macos-button macos-button-yellow"></span>
          <span className="macos-button macos-button-green"></span>
        </div>
        <div id="home" style={{ padding: isDesktopOrLaptop ? '50px' : '20px', minHeight: 360, alignItems: 'center' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <WelcomeCard />
            </Col>
            <Col xs={24} md={16}>
              <TabbedCard />
            </Col>
          </Row>
        </div>
      </Content>
      {/* <Footer  /> */}
    </Layout>
  );
};

export default App;
