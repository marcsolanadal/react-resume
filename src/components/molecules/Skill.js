import React from 'react';
import styled from 'styled-components';

import { Circle } from '../atoms';

const StyledCircle = styled(Circle)`
  margin: 2px;
`;

const SkillContainer = styled.div`
  min-width: 280px;
  max-width: 750px;
  display: flex;
  justify-content: space-between;
`;

export default function Skill(props) {
  const circles = [];
  if (props.level) {
    for (let i = 1; i <= 5; i++) {
      if (i <= props.level) {
        circles.push(<StyledCircle key={`Circle_${i}`} fill="true" />);
      } else {
        circles.push(<StyledCircle key={`Circle_${i}`} />);
      }
    }
  }

  return (
    <SkillContainer>
      <span>{props.name}</span>
      <span>{circles}</span>
    </SkillContainer>
  );
}
