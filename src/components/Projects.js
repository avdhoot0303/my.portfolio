import React, { useState } from 'react';
import { Card, Row, Col, Tabs, Button, Tag } from 'antd';
import styled from 'styled-components';

const { TabPane } = Tabs;

// Styled Card with hover effect and custom title background
const StyledCard = styled(Card)`
  margin-bottom: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .ant-card-head {
    background-color: #252525; /* Set your desired background color here */
    color: #ffffff;
    .ant-card-head-title {
      white-space: normal;
      word-wrap: break-word;
    }
  }
`;

const ProjectDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.expanded ? 'none' : 3)};
  -webkit-box-orient: vertical;
  line-height: 1.5;
  max-height: ${props => (props.expanded ? 'none' : '4.5em')};
`;

const Projects = () => {
  const [expandedKeys, setExpandedKeys] = useState({});

  const handleToggleExpand = (key) => {
    setExpandedKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const projectList = [
    {
      key: 'project1',
      label: 'Malware Detection of Portable Executable files using CNN',
      description: 'This project develops a malware detection system using a combination of Random Forest and Convolutional Neural Network (CNN) models. The Random Forest model classifies Portable Executable (PE) files as malicious or benign based on their characteristics, while the CNN model further classifies detected malware into 25 different families. The system is deployed using FastAPI for practical application.',
      githubLink: 'https://github.com/avdhoot0303/Malware-detection-of-PE-files',
      category: 'Data Science and Machine Learning',
      technologies: ['Python', 'FastAPI', 'RESTful API','CNN', 'Random Forest'],
    },
    {
      key: 'project2',
      label: 'REIA - Renewable Energy Integration Assistant',
      description: 'The Renewable Energy Integration Assistant (REIA) aims to simplify this transition for users by providing a user-friendly platform that offers comprehensive guidance on the adoption of renewable energy solutions. By leveraging data from leading technology companies in the smart energy sector, REIA will deliver personalized advice, streamline the adoption process, and empower users to make informed decisions about renewable energy investments.',
      appLink: 'https://example.com/app2',
      githubLink: 'https://github.com/project2',
      category: 'Data Science and Machine Learning',
      technologies: ['Python', 'Machine Learning', 'Smart Energy', 'Large Language Models'],
    },
    {
      key: 'project3',
      label: 'ChargeWISE: Weather-Driven EV Charging Optimization',
      description: 'The project identified peak EV charging hours and user preferences, using data analytics to enhance infrastructure planning and utility services by learning from user behavior trends related to weather and time.',
      appLink: 'https://example.com/app3',
      githubLink: 'https://github.com/project3',
      category: 'Data Science and Machine Learning',
      technologies: ['Python', 'Data Analytics', 'EV Charging','Demand Forecasting'],
    },
    {
      key: 'project4',
      label: 'Music Metadata Analysis',
      description: 'In this project, we try to identify the characteristics that constitute a genre and distinguish them from other genres. We do this by training different classification models and plotting the importance of each variable in the feature set. We also try to predict the genre of a song using the same models which helps us validate the correctness of variable importance. Additionally, we also predict the popularity score of a song. Regression analysis did not prove effective for this task hence we moved towards classification.',
      appLink: 'https://example.com/app4',
      githubLink: 'https://github.com/project4',
      category: 'Data Science and Machine Learning',
      technologies: ['Python', 'Classification Models', 'Music Analysis', 'Spotify API'],
    },
    {
      key: 'project5',
      label: 'awwdudee space',
      description: 'This is the portfolio that you\'re currently viewing. It\'s built using react and ant design component library',
      appLink: 'https://example.com/app5',
      githubLink: 'https://github.com/project5',
      category: 'Frontend',
      technologies: ['JavaScript', 'React'],
    },
    {
      key: 'project5',
      label: 'GitHub actions for React application',
      description: 'This is the portfolio that you\'re currently viewing. It\'s built using react and ant design component library',
      appLink: 'https://example.com/app5',
      githubLink: 'https://github.com/project5',
      category: 'DevOps',
      technologies: ['Google Cloud Platform','CICD','GitHub Actions','JavaScript', 'React'],
    }
    // Add more projects as needed
  ];

  // Group projects by category
  const categories = projectList.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <Tabs defaultActiveKey="1" centered>
      {Object.keys(categories).map((category) => (
        <TabPane tab={category} key={category}>
          <Row gutter={[16, 16]}>
            {categories[category].map((project) => (
              <Col key={project.key} xs={24} sm={12} lg={12} xl={12}>
                <StyledCard
                  hoverable
                  title={project.label}
                  style={{ width: '100%' }}
                >
                  <ProjectDescription expanded={expandedKeys[project.key]}>
                    {project.description}
                  </ProjectDescription>
                  <div style={{ marginTop: '8px', marginBottom: '10px' }}>
                    {project.technologies.map((tech, index) => (
                      <Tag color= '#B0DAFF' style={{ marginRight: '4px', marginBottom: '6px', color: 'black'}}  key={index}>{tech}</Tag>
                    ))}
                  </div>
                  <Button
                    type="link"
                    onClick={() => handleToggleExpand(project.key)}
                  >
                    {expandedKeys[project.key] ? 'Show Less' : 'Show More'}
                  </Button>
                  {/* <a href={project.appLink} target="_blank" rel="noopener noreferrer">
                    View App
                  </a> */}
                </StyledCard>
              </Col>
            ))}
          </Row>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Projects;
