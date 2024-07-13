import React, { useState } from 'react';
import { Card, Tabs } from 'antd';
import CombinedComponent from './CombinedComponent';
import Projects from './Projects';
import BlogList from './BlogList';
import Skills from './Skills';
import ResumeViewer from './ResumeViewer';
import resumeFile from '../assets/Avdhoot_Resume_SWE.pdf';
import styled from 'styled-components';
import PersonalSpace from './PersonalSpace';


const ScrollableContent = styled.div`
  max-height: calc(100vh - 200px); // Adjust as needed
  overflow-y: auto;
  padding: 16px;
`;

const { TabPane } = Tabs;

const TabbedCard = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [animationClass, setAnimationClass] = useState('slide-in-left');

  const handleTabChange = (key) => {
    setAnimationClass('slide-out-right');
    setTimeout(() => {
      setActiveTab(key);
      setAnimationClass('slide-in-left');
    }, 500); // Duration of the slide-out animation
  };

  return (
    <Card bordered = {false} hoverable = {true} style={{ height: '100%', borderRadius:'18px', background: '#F6F5F2'  }}>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Projects" key="1">
          <ScrollableContent className={animationClass}>
            <Projects />
          </ScrollableContent>
        </TabPane>
        {/* <TabPane tab="Blogs" key="2">
          <ScrollableContent className={animationClass}>
            <BlogList />
          </ScrollableContent>
        </TabPane> */}
        <TabPane tab="Education and Experience" key="3">
          <ScrollableContent className={animationClass}>
            <CombinedComponent />
          </ScrollableContent>
        </TabPane>
        <TabPane tab="Skills" key="4">
          <ScrollableContent className={animationClass}>
            <Skills />
          </ScrollableContent>
        </TabPane>
        <TabPane tab="Resume" key="5">
          <ScrollableContent className={animationClass}>
            <ResumeViewer file={resumeFile} />
          </ScrollableContent>
        </TabPane>
        <TabPane tab="Personal Space" key="6">
          <ScrollableContent className={animationClass}>
            <PersonalSpace />
          </ScrollableContent>
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default TabbedCard;
