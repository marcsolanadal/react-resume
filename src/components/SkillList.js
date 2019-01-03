import React from 'react';
import styled from 'styled-components';
import { Circle } from './Elements';

const FamilyContainer = styled.div`
  padding-bottom: 16px;

  div:first-child {
    font-weight: bold;
  }
`;

const StyledCircle = styled(Circle)`
  margin: 2px;
`;
const SkillContainer = styled.div`
  min-width: 280px;
  max-width: 750px;
  display: flex;
  justify-content: space-between;
`;

function Skill(props) {
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

export default function SkillList({ skills }) {
  // Detecting if we get no family
  if (skills instanceof Array) {
    return (
      <>
        {skills.map((skill, index) => {
          if (skill.level === undefined) {
            return <div key={`Skill_${index}`}>{skill}</div>;
          } else {
            return (
              <Skill
                key={`Skill_${index}`}
                name={skill.name}
                level={skill.level}
              />
            );
          }
        })}
      </>
    );
  }

  return (
    <>
      {Object.keys(skills).map((family, index) => {
        // Detecting if the family has well formed object inside
        if (skills[family][0].name === undefined) {
          return (
            <FamilyContainer key={`Family_${index}`}>
              <div>{family}</div>
              <div>{skills[family].join(', ')}</div>
            </FamilyContainer>
          );
        }

        return (
          <FamilyContainer key={`Family_${index}`}>
            <div>{family}</div>
            {skills[family].map((skill, index) => {
              return (
                <Skill
                  key={`Skill_${index}`}
                  name={skill.name}
                  level={skill.level}
                />
              );
            })}
          </FamilyContainer>
        );
      })}
    </>
  );
}
