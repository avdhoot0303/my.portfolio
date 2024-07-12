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
    border-color: black; /* Change to desired hover border color */
  }
`;

const educationItems = [
  {
    children: 'Masters of Science in Data Science',
    date: '2025',
    logo: StonyBrookLogo, // Use imported logo
    description: (
      <>
        <p>
          <Avatar src={StonyBrookLogo} size="large" style={{ marginRight: 10 }} />
          Stony Brook University
        </p>
        <ul>
          <li>Published research paper on machine learning</li>
          <li>Awarded scholarship for academic excellence</li>
        </ul>
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
        <p>
          <Avatar src={NeosoftLogo} size="large" style={{ marginRight: 8 }} />
          Neosoft Technologies
        </p>
        <ul>
          <li>Worked on machine learning projects</li>
          <li>Developed cloud-based solutions</li>
        </ul>
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
        <p>
          <Avatar src={TechMahindraLogo} size="large" style={{ marginRight: 8 }} />
          Tech Mahindra
        </p>
        <ul>
          <li>Worked on software development</li>
          <li>Participated in national coding competition</li>
        </ul>
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
        <p>
          <Avatar src={MumbaiUniversityLogo} size="large" style={{ marginRight: 8 }} />
          University of Mumbai
        </p>
        <ul>
          <li>Internship at leading tech company</li>
          <li>Participated in national coding competition</li>
        </ul>
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
        <p>
          <Avatar src={PravinPatilLogo} size="large" style={{ marginRight: 8 }} />
          Pravin Patil Polytechnic
        </p>
        <ul>
          <li>Top student in graduating class</li>
          <li>Project showcased at state-level science fair</li>
        </ul>
      </>
    ),
    dot: <BookOutlined />,
  },
];

const achievementsItems = [
  {
    children: 'Best Paper Award at XYZ Conference',
    date: '2024',
    dot: <TrophyOutlined />,
  },
  {
    children: 'Recipient of ABC Fellowship',
    date: '2023',
    dot: <TrophyOutlined />,
  },
  {
    children: 'Top Innovator in DEF Competition',
    date: '2022',
    dot: <TrophyOutlined />,
  },
  {
    children: 'Deep Learning Techniques in AI - Published in IEEE Transactions',
    date: '2024',
    dot: <TrophyOutlined />,
  },
  {
    children: 'Blockchain and its Applications - Published in Springer',
    date: '2023',
    dot: <TrophyOutlined />,
  },
  {
    children: 'Advancements in Data Science - Published in Elsevier',
    date: '2022',
    dot: <TrophyOutlined />,
  },
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
