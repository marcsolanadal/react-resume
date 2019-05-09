import React from 'react';

import { SubTitle, Section } from '../atoms';
import { SkillList } from '../molecules';

export default function TechnicalSkills({ skills }) {
  return (
    <Section>
      <SubTitle>TECHNICAL SKILLS</SubTitle>
      <SkillList skills={skills} />
    </Section>
  );
}
