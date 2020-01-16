import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FileSystemProvider } from './context/FileSystemProvider';
import { GlobalStyles } from './styled';

ReactDOM.render(
  <FileSystemProvider>
    <App />
    <GlobalStyles />
  </FileSystemProvider>,
  document.getElementById('root'),
);
