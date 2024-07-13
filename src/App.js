import React, { useState } from 'react';
import { Layout, Row, Col, Switch, theme } from 'antd';
import WelcomeCard from './components/WelcomeCard';
import TabbedCard from './components/TabbedCard';
import Footer from './components/Footer';
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

  return (
    <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center', background:'#DAF5FF'}}>
      <Content
        theme="light"
        style={{
          margin: '20px',
          padding: '20px',
          borderRadius: '18px',
          background:  '#ffffff',
          maxWidth: '1600px', // Optional: to limit the maximum width
          width: '100%', // Ensures the content takes full width up to maxWidth
          position: 'relative',
        }}
      >
        <div className="macos-buttons">
          <span className="macos-button macos-button-red"></span>
          <span className="macos-button macos-button-yellow"></span>
          <span className="macos-button macos-button-green"></span>
        </div>
        <div id="home" style={{ padding: 50, minHeight: 360, alignItems: 'center' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <WelcomeCard  />
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
