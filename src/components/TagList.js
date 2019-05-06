import React from 'react';
import styled from 'styled-components';

const Tag = styled.li`
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

const TagList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 0;
  flex-flow: wrap;
`;

export default function({ tags = [] }) {
  if (typeof tags === undefined) {
    return null;
  }
  return (
    <TagList>
      {tags.map(tag => (
        <Tag color={'forestgreen'}>
          {tag.toLowerCase()}
        </Tag>
      ))}
    </TagList>
  );
}
