import styled from 'styled-components';

export default styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  border-radius: 5px;
  height: 16px;
  margin: 2px;
  padding: 5px;
  font-size: 12px;

  white-space: nowrap;
  overflow: hidden;

  color: ${props => props.color};
  border: 1px solid ${props => props.color};
`;
