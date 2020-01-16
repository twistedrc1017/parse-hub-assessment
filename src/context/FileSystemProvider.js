import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const FileSystemContext = createContext();

export function useProvideFileSystem() {
  const [targetPath, setTargetPath] = useState('/');
  const [results, setResults] = useState([targetPath, []]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.post('/file-explorer', { path: targetPath });
      setResults(data);
    })();
  }, [targetPath]);
  return { data: results, setTargetPath };
}

export function FileSystemProvider({ children }) {
  const value = useProvideFileSystem();
  return <FileSystemContext.Provider value={value}>{children}</FileSystemContext.Provider>;
}

export function useSetTargetPath() {
  const { setTargetPath } = useContext(FileSystemContext);
  return setTargetPath;
}

export function useFileSystem() {
  const { data } = useContext(FileSystemContext);
  return data;
}
