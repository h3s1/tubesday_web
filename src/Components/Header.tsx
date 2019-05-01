import React from "react";
import styled from "styled-components";
import logo from "../logo_main.svg";

const Header: React.SFC<{}> = ({}) => (
  <HeaderContainer>
    <Logo src={logo} />
    <IconContainer>
      <Icon className="fas fa-pen" />
      <Icon className="fas fa-search" />
    </IconContainer>
  </HeaderContainer>
);

const IconContainer = styled.div``;
const Logo = styled.img`
  width: 5rem;
`;

const Icon = styled.i`
  font-size: 1rem;
  padding: 0.5rem;
`;

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
