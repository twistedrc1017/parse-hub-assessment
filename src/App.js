import React from 'react';
import { Body, Contained, Content } from './styled';
import PageHeader from './PageHeader';
import TopNav from './Nav';
import FileBrowser from './FileBrowser';

function App() {
  return (
    <Body>
      <TopNav />
      <Contained>
        <PageHeader />
        <Content>
          <FileBrowser />
        </Content>
      </Contained>
    </Body>
  );
}

export default App;
