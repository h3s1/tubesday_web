import React from "react"
import styled from 'styled-components'
import SearchContainer from "./SearchContainer"
import {Button} from "antd"
import logo from "../logo_main.svg"


const Header: React.SFC<{}> = ({}) => (
    <HeaderContainer>
      <InnerContainer>
      <img src={logo} />
      <SearchContainer />
      <Button type="ghost">다음</Button>
      </InnerContainer>
      </HeaderContainer>
  );

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #BF292A;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    z-index: 10;
`;

const InnerContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header