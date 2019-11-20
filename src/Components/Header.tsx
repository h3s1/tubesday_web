import React from "react";
import styled from "styled-components";
import logo from "../logo_main.svg";
import { headerHeight } from "../config/_mixin";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

const Header: React.SFC<{}> = ({}) => (
  <HeaderContainer headerHeight={headerHeight}>
    <Link to="/">
      <Logo src={logo} />
    </Link>
    <IconContainer>
      {!localStorage.getItem("jwt") ? <>
      <SLink to="/user/sign_up">
        <Icon className="fas fa-user-plus"/>
      </SLink>
      <SLink to="/user/sign_in">
        <Icon className="fas fa-sign-in-alt"/>
      </SLink></>:
      <>
      < LogOutContainer onClick={()=> {window.location.reload();
        localStorage.removeItem("jwt")}}>
        <Icon className="fas fa-sign-out-alt"/>
      </LogOutContainer>
      <SLink to="/posts/create">
        <Icon className="fas fa-pen" />
      </SLink></>
      }
      <SearchContainer>
        <HeaderSearch />
      </SearchContainer>
    </IconContainer>
  </HeaderContainer>
);

const SearchContainer = styled.button`
  margin-left: 0.5rem;
  padding: 0;
`;

const SLink = styled(Link)`
  margin: 0.5rem;
`;

const LogOutContainer = styled.span`
margin: 0.5rem;
`

const IconContainer = styled.div``;

const Logo = styled.img`
  width: 5rem;
`;

const Icon = styled.i`
  font-size: 1rem;
`;

const HeaderContainer = styled.header<{ headerHeight: string }>`
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
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
`;

export default Header;
