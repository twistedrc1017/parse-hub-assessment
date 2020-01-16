import React from 'react';
import styled from 'styled-components';

const FileDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px;
`;
const Title = styled.h1`
  font-size: 2em;
  margin: 0 0 8px 0;
`;
const Span = styled.span`
  font-size: 1em;
`;

export function FileDetails(props) {
  return (
    <FileDetailsWrapper>
      <Title>{`File: ${props.name}${props.ext}`}</Title>
      <Span>{`Extension: ${props.ext.replace('.', '') || 'None'}`}</Span>
      <Span>{`Size: ${props.size}`}</Span>
    </FileDetailsWrapper>
  );
}
