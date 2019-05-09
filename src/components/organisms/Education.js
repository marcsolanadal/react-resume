import React from 'react';
import styled from 'styled-components';

import { SubTitle, Section } from '../atoms';
import { CircleList } from '../molecules';

const EducationItem = styled.div`
  div:first-child {
    font-weight: bold;
  }
`;

export default function Education({ education }) {
  return (
    <Section id="education">
      <SubTitle>EDUCATION</SubTitle>
      <CircleList
        list={education}
        maxWidth={400}
        renderItem={course => (
          <EducationItem>
            <div>{course.title}</div>
            <div>{course.school}</div>
            <div>{course.period}</div>
            {course.additionalInfo && <div>{course.additionalInfo}</div>}
          </EducationItem>
        )}
      />
    </Section>
  );
}
