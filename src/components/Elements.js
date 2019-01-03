import styled from 'styled-components';

export const Section = styled.div`
  margin-top: 24px;
  min-width: 280px;
`;

export const SubTitle = styled.div`
  color: green;
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Circle = styled.span`
  width: 10px;
  height: 10px;
  border: 2px solid green;
  border-radius: 10px;
  background-color: ${props => (props.fill ? 'green' : 'white')};
  display: inline-block;
`;
