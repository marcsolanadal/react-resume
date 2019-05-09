import styled from 'styled-components';

export default styled.span`
  width: 10px;
  height: 10px;
  border: 2px solid green;
  border-radius: 10px;
  background-color: ${props => (props.fill ? 'green' : 'white')};
  display: inline-block;
`;
