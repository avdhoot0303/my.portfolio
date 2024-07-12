import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import SkillItem from './SkillItem';

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px 0; /* Add padding for better spacing */
`;

const SkillCard = ({ title, skills }) => (
  <Card style={{ margin: 10 }}>
    <CardTitle>{title}</CardTitle>
    <SkillsGrid>
      {skills.map((skill, index) => (
        <SkillItem key={index} name={skill.name} icon={skill.icon} />
      ))}
    </SkillsGrid>
  </Card>
);

export default SkillCard;
