import React from 'react';

import { SubTitle, Section } from '../atoms';
import { SkillList } from '../molecules';

export default function Languages({ languages }) {
  return (
    <Section>
      <SubTitle>LANGUAGES</SubTitle>
      <SkillList skills={languages} />
    </Section>
  );
}
