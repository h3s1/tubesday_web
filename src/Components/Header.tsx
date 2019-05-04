import React from "react";
import styled from "styled-components";
import logo from "../logo_main.svg";
import { headerHeight } from "../config/_mixin";

const Header: React.SFC<{}> = ({}) => (
  <HeaderContainer headerHeight={headerHeight}>
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

interface IHeaderContainerProps {
  headerHeight: string;
}

const HeaderContainer = styled.div<IHeaderContainerProps>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.headerHeight};
  padding: 0.5rem 1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
