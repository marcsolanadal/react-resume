import React from 'react';

import { SubTitle, Section } from '../atoms';

export default function PersonalDetails({ birthDate, address, telephone, email }) {
  return (
    <Section>
      <SubTitle>PERSONAL DETAILS</SubTitle>
      <div>{birthDate}</div>
      <div>{address}</div>
      <div>{telephone}</div>
      <a href={`mailto:${email}`}>{email}</a>
    </Section>
  );
}
