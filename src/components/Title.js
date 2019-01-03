import React from 'react';
import styled from 'styled-components';

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

export default function Title({ data, viewport }) {
  return (
    <TitleContainer viewport={viewport}>
      <TitleBox>
        <TitleName>{data.name.toUpperCase()}</TitleName>
        <TitleDescription>{data.jobTitle.toUpperCase()}</TitleDescription>
      </TitleBox>
    </TitleContainer>
  );
}
