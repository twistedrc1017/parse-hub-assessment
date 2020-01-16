import React from 'react';
import styled from 'styled-components';
import { useFileSystem, useSetTargetPath } from './context/FileSystemProvider';
import { HomeIcon } from './assets/Icons';

const PageHeaderWrapper = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  background-color: #9dd1ff;
`;

const BreadcrumbLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
  color: #0000ee;
`;
const Separator = styled.span`
  margin: 0 4px;
  font-weight: bold;
`;

function PageHeader(props) {
  const setTargetPath = useSetTargetPath();
  const [path] = useFileSystem();
  return (
    <PageHeaderWrapper>
      <BreadcrumbLink onClick={() => setTargetPath('/')}>
        <HomeIcon />
      </BreadcrumbLink>
      {path.split('/').map((str, i, arr) => {
        return (
          <React.Fragment>
            <PathButton text={str} fullPath={path} setTargetPath={setTargetPath} />
            {i !== arr.length - 1 && <Separator>/</Separator>}
          </React.Fragment>
        );
      })}
    </PageHeaderWrapper>
  );
}

function PathButton({ text, fullPath, setTargetPath }) {
  return <BreadcrumbLink onClick={() => setTargetPath(`${fullPath.substr(0, fullPath.indexOf(text))}${text}`)}>{text}</BreadcrumbLink>;
}

export default PageHeader;
