import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const SkillName = styled.span`
  font-size: 14px;
`;

const SkillItem = ({ name, icon }) => (
  <SkillContainer>
    <SkillIcon src={icon} alt={name} />
    <SkillName>{name}</SkillName>
  </SkillContainer>
);

export default SkillItem;
