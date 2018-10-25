import * as React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #0168BD;
  padding: 20px;
  color: white;
`;

const Logo = styled.h1`
  text-transform: uppercase;
  transform: skew(-9deg);
  margin: 0;
  padding: 0;
  font-size: 30px;
`;

class Header extends React.Component<{}, {}> {
  render() {
    return ( 
      <HeaderContainer>
        <Logo>Shout Out</Logo>
      </HeaderContainer>
    )
  }
} 

export default Header;
