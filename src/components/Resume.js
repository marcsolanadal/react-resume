import React from 'react';
import styled from 'styled-components';

import CircleList from './CircleList';
import SkillList from './SkillList';
import { Section, SubTitle } from './Elements';
import { splitTextByParagraph } from '../utils/formatting';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
`;
const TitleBox = styled.div`
  display: inline-block;
  font-family: 'Anton', sans-serif;
`;
const TitleName = styled.div`
  color: green;
  border-bottom: 1px solid black;
  font-size: 48px;
`;
const TitleDescription = styled.div`
  font-size: 24px;
`;

export function Title({ name, jobTitle }) {
  return (
    <TitleContainer>
      <TitleBox>
        <TitleName>{name.toUpperCase()}</TitleName>
        <TitleDescription>{jobTitle.toUpperCase()}</TitleDescription>
      </TitleBox>
    </TitleContainer>
  );
}

export function PersonalDetails({ birthDate, address, telephone, email }) {
  return (
    <Section>
      <SubTitle>PERSONAL DETAILS</SubTitle>
      <div>{birthDate}</div>
      <div>{address}</div>
      <div>{telephone}</div>
      <div>{email}</div>
    </Section>
  );
}

const JobItem = styled.div`
  div:first-child {
    font-weight: bold;
  }

  div:last-child {
    text-align: justify;
  }
`;

export function EmploymentHistory({ employmentHistory }) {
  return (
    <Section>
      <SubTitle>EMPLOYMENT HISTORY</SubTitle>
      <CircleList
        list={employmentHistory}
        maxWidth={700}
        renderItem={job => (
          <JobItem>
            <div>{job.title}</div>
            <div>
              <i>{job.company} - {job.location}</i>
            </div>
            <div>
              <i>{job.period.start} - {job.period.end} ({job.period.time})</i>
            </div>
            <div>{splitTextByParagraph(job.description)}</div>
          </JobItem>
        )}
      />
    </Section>
  );
}

const EducationItem = styled.div`
  div:first-child {
    font-weight: bold;
  }
`;

export function Education({ education }) {
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

export function TechnicalSkills({ skills }) {
  return (
    <Section>
      <SubTitle>TECHNICAL SKILLS</SubTitle>
      <SkillList skills={skills} />
    </Section>
  );
}

export function Languages({ languages }) {
  return (
    <Section>
      <SubTitle>LANGUAGES</SubTitle>
      <SkillList skills={languages} />
    </Section>
  );
}
