import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import CreateSearch from "../CreateSearch";
import { headerHeight } from "../../config/_mixin";

interface Props {
  type: string;
}

const PostCreateHeader: React.SFC<Props> = ({ type }) => (
  <HeaderContainer>
    {type === "search_results" ? <CreateSearch /> : <NavContainer />}
  </HeaderContainer>
);

const NavContainer: React.SFC<{}> = ({}) => (
  <ButtonContainer>
    <NavButton>이전</NavButton>
    <NavButton>완료</NavButton>
  </ButtonContainer>
);

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavButton = styled(Button)`
  border: none;
`;

const HeaderContainer = styled.div`
  position: fixed;
  padding: 0.5rem 1rem;
  top: ${headerHeight};
  left: 0;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  z-index: 10;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
`;

export default PostCreateHeader;
