import React from 'react';

import Template from '../templates/ThreeColumnTemplate';
import {
  Education,
  EmploymentHistory,
  Languages,
  PersonalDetails,
  TechnicalSkills,
  Title,
} from '../organisms';

export function ResumePage(props) {
  return (
    <Template
      renderTitle={() => <Title {...props} />}
      renderPersonal={() => <PersonalDetails {...props} />}
      renderEmploymentHistory={() => <EmploymentHistory {...props} />}
      renderEducation={() => <Education {...props} />}
      renderTechnical={() => <TechnicalSkills {...props} />}
      renderLanguage={() => <Languages {...props} />}
    />
  );
}
