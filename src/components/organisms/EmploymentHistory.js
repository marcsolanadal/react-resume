import React from 'react';
import styled from 'styled-components';

import { SubTitle, Section } from '../atoms';
import { CircleList, TagList } from '../molecules';
import { splitTextByParagraph } from '../../utils/formatting';

const JobItem = styled.div`
  div:first-child {
    font-weight: bold;
  }

  div:last-child {
    text-align: justify;
  }
`;

export default function EmploymentHistory({ employmentHistory }) {
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
              <i>
                {job.company} - {job.location}
              </i>
            </div>
            <div>
              <i>
                {job.period.start} - {job.period.end} ({job.period.time})
              </i>
            </div>
            <TagList tags={job.tags} />
            <div>{splitTextByParagraph(job.description)}</div>
          </JobItem>
        )}
      />
    </Section>
  );
}
