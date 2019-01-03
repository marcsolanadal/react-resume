import React from 'react';
import styled from 'styled-components';
import { Circle } from './Elements';

const ListItem = styled.div`
  border-left: 2px solid green;
  margin-left: 5px;
`;

const ListContainer = styled.div`
  list-style: none;
  min-width: 280px;
  max-width: ${props => props.maxWidth}px;

  ${ListItem}:last-child {
    border-left: none;
    position: relative;
    left: 2px;
  }
`;

const StyledCircle = styled(Circle)`
  display: block;
  position: relative;
  left: -8px;
`;

const ItemContainer = styled.div`
  margin-left: 24px;
  position: relative;
  top: -16px;
`;

export default function StyledList(props) {
  return (
    <ListContainer maxWidth={props.maxWidth}>
      {props.list.map((job, index) => (
        <ListItem key={`ListItem_${index}`}>
          <StyledCircle />
          <ItemContainer>{props.renderItem(job)}</ItemContainer>
        </ListItem>
      ))}
    </ListContainer>
  );
}
