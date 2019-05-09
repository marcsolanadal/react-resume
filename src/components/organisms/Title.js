import React from 'react';
import styled from 'styled-components';

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

export default function Title({ name, jobTitle }) {
  return (
    <TitleBox>
      <TitleName>{name.toUpperCase()}</TitleName>
      <TitleDescription>{jobTitle.toUpperCase()}</TitleDescription>
    </TitleBox>
  );
}
