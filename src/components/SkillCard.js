import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import SkillItem from './SkillItem';

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

// Dynamic grid layout for skills within each card
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
`;

// Auto-adjusting card container
const SkillCardContainer = styled(Card)`
  margin: 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SkillCard = ({ title, skills }) => (
  <SkillCardContainer>
    <CardTitle>{title}</CardTitle>
    <SkillsGrid>
      {skills.map((skill, index) => (
        <SkillItem key={index} name={skill.name} icon={skill.icon} />
      ))}
    </SkillsGrid>
  </SkillCardContainer>
);

export default SkillCard;
