import React from 'react';
import { useFileSystem } from './context/FileSystemProvider';
import { FileDetails } from './FileDetails';
import { DirectoryContents } from './DirectoryContents';

function FileBrowser(props) {
  const [_, data] = useFileSystem();
  if (!Array.isArray(data)) {
    return <FileDetails {...data} />;
  } else {
    return <DirectoryContents data={data} />;
  }
}

export default FileBrowser;
