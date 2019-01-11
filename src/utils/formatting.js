import React from 'react';

export function splitTextByParagraph(text) {
  return text.split('\n').map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>
  })
}
