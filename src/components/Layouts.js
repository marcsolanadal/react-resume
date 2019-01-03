import React from 'react';
import styled from 'styled-components';

import { 
  Title, 
  PersonalDetails, 
  EmploymentHistory, 
  Education, 
  TechnicalSkills, 
  Languages 
} from './Resume';

const Column = styled.div``;
const TabletLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${Column} {
    display: flex;
    flex-direction: column;
  }
  ${Column}:last-child {
    margin-left: 36px;
  }
`;

const DesktopLayout = styled.div`
  display: flex;
  flex-direction: row;

  ${Column} {
    margin-left: 36px;
  }

  ${Column}:first-child {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

export function MobileResume(data) {
  return (
    <div>
      {Title(data)}
      {PersonalDetails(data)}
      {EmploymentHistory(data)}
      {Education(data)}
      {TechnicalSkills(data)}
      {Languages(data)}
    </div>
  );
}

export function TabletResume(data) {
  return (
    <div>
      {Title(data)}

      <TabletLayout>
        <Column>
          {PersonalDetails(data)}
          {EmploymentHistory(data)}
        </Column>
        <Column>
          {Education(data)}
          {TechnicalSkills(data)}
          {Languages(data)}
        </Column>
      </TabletLayout>
    </div>
  );
}

export function DesktopResume(data) {
  return (
    <div>
      <DesktopLayout>
        <Column>
          {Title(data)}
          {PersonalDetails(data)}
        </Column>

        <Column>{EmploymentHistory(data)}</Column>
        <Column>{TechnicalSkills(data)}</Column>

        <Column>
          {Education(data)}
          {Languages(data)}
        </Column>
      </DesktopLayout>
    </div>
  );
}
