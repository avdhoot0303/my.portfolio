import React from 'react';
import { Timeline, Card, Row, Col, Avatar } from 'antd';
import styled from 'styled-components';
import { BookOutlined, LaptopOutlined, TrophyOutlined } from '@ant-design/icons';

import StonyBrookLogo from '../assets/Stony Brook Logo.png';
import NeosoftLogo from '../assets/Neosoft Technologies Logo.png';
import TechMahindraLogo from '../assets/Tech Mahindra Logo.png';
import MumbaiUniversityLogo from '../assets/mumUNI.jpg';
import PravinPatilLogo from '../assets/MSBTE logo.png';

const StyledTimelineItem = styled(Timeline.Item)`
  transition: transform 0.3s ease, font-weight 0.3s ease;
  &:hover {
    transform: scale(1.05);
    font-weight: bold;
    color: black
  }
`;

const TimelineItemWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  transition: transform 0.4s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: #7AA2E3; /* Change to desired hover border color */
  }
`;

const educationItems = [
  {
    children: 'Masters of Science in Data Science',
    date: '2025',
    logo: StonyBrookLogo, // Use imported logo
    description: (
      <>
       <b> <p>
          <Avatar src={StonyBrookLogo} size="large" style={{ marginRight: 10 }} />
          Stony Brook University
        </p></b>
      </>
    ),
    dot: <BookOutlined />,
  },
  {
    children: 'Software Engineer (Data Science, Cloud, MLOps, DataOps)',
    date: 'Jun 2021 - Jun 2023',
    logo: NeosoftLogo, // Use imported logo
    description: (
      <>
        <b><p>
          <Avatar src={NeosoftLogo} size="large" style={{ marginRight: 8 }} />
          Neosoft Technologies
        </p></b>

      </>
    ),
    dot: <LaptopOutlined />,
    color: 'green',
  },
  {
    children: 'Software Engineer Intern',
    date: 'Jan 2021 - May 2021',
    logo: TechMahindraLogo, // Use imported logo
    description: (
      <>
      <b>
        <p>
          <Avatar src={TechMahindraLogo} size="large" style={{ marginRight: 8 }} />
          Tech Mahindra
        </p></b>
      </>
    ),
    dot: <LaptopOutlined />,
    color: 'green',
  },
  {
    children: 'Bachelor of Engineering in Information Technology',
    date: '2021',
    logo: MumbaiUniversityLogo, // Use imported logo
    description: (
      <>
       <b> <p>
          <Avatar src={MumbaiUniversityLogo} size="large" style={{ marginRight: 8 }} />
          University of Mumbai
        </p></b>
      </>
    ),
    dot: <BookOutlined />,
  },
  {
    children: 'Diploma in Computer Engineering',
    date: '2018',
    logo: PravinPatilLogo, // Use imported logo
    description: (
      <>
      <b>
        <p>
          <Avatar src={PravinPatilLogo} size="large" style={{ marginRight: 8 }} />
          Pravin Patil Polytechnic
        </p></b>
      </>
    ),
    dot: <BookOutlined />,
  },
];

const achievementsItems = [
  ,
  {
    children: 'Rewarded Employee of the Month Twice for best performance and Client experience',
    date: '2022',
    dot: <TrophyOutlined />,
  },
  {
    children: 'Malware Detection of Portable executables using ML and CNN techniques ',
    date: '2021',
    dot: <TrophyOutlined />,
  },
  {
    children: 'Won Recursion Hackathon at RGIT (Mumbai) - IOT plant monitoring system problem',
    date: '2020',
    dot: <TrophyOutlined />,
  }
];

const TimelineSection = ({ title, items }) => (
  <Card title={title} style={{ marginBottom: '24px', borderRadius:"25px", overflow: 'hidden' }}>
    <Timeline mode="alternate" >
      {items.map((item, index) => (
        <StyledTimelineItem
          key={index}
          color={item.color}
          dot={item.dot}
          label={item.date}
        >
          <TimelineItemWrapper>
            {item.children}
            {item.description && <div>{item.description}</div>}
          </TimelineItemWrapper>
        </StyledTimelineItem>
      ))}
    </Timeline>
  </Card>
);

const CombinedComponent = () => (
  <div style={{ padding: '24px' }}>
    <Row gutter={[24, 24]}>
      <Col xs={24}>
        <TimelineSection title="Education and Work Experience" items={educationItems} />
      </Col>
      <Col xs={24}>
        <TimelineSection title="Achievements" items={achievementsItems} />
      </Col>
    </Row>
  </div>
);

export default CombinedComponent;
