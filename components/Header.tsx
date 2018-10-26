import * as React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #007FC9;
  color: white;
  padding: 0 20px;
`;

const Logo = styled.h1`
  transform: skew(-9deg);
  margin: 0;
  padding: 0;
  font-size: 25px;
  text-align: left;
  font-family: 'Poppins';
`;

class Header extends React.Component<{}, {}> {
  render() {
    return ( 
      <HeaderContainer>
        <Logo>What's Happening at Logicworks...</Logo>
      </HeaderContainer>
    )
  }
} 

export default Header;
