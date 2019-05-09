import React from 'react';
import styled from 'styled-components';
import { Tag } from '../atoms';

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
      {tags.map((tag, index) => (
        <Tag key={`tag_${index}`} color={'forestgreen'}>
          {tag.toLowerCase()}
        </Tag>
      ))}
    </TagList>
  );
}
