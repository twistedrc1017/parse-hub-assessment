import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2em;
`;
function Nav(props) {
  return (
    <NavWrapper>
      <Title>File Explorer</Title>
    </NavWrapper>
  );
}

export default Nav;
