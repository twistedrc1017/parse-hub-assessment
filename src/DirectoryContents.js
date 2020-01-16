import React from 'react';
import styled from 'styled-components';
import { useSetTargetPath } from './context/FileSystemProvider';
import { FolderIcon, FileIcon } from './assets/Icons';

const DirectoryItem = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fafafa;
  transition: background-color 250ms linear;
  padding: 8px 16px;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const Span = styled.span`
  margin-left: 8px;
`;
const Size = styled.span`
  margin-left: auto;
`;

export function DirectoryContents({ data }) {
  const setTargetPath = useSetTargetPath();
  return data.map(({ type, size, ext, name, path }) => {
    const Icon = type === 'folder' ? <FolderIcon /> : <FileIcon />;
    return (
      <DirectoryItem onClick={() => setTargetPath(path)}>
        {Icon}
        <Span>{`${name}${type === 'file' ? ext : ''}`}</Span>
        {type === 'file' && <Size>{size}</Size>}
      </DirectoryItem>
    );
  });
}
