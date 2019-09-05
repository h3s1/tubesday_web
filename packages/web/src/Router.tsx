import React from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "./Routes/PostList";
import PostDetail from "./Routes/PostDetail";
import CreatePost from "./Routes/CreatePost";
import SignIn from './Routes/SignIn';
import SignUp from './Routes/SignUp';
import Header from "./Components/Header";
import { headerHeight } from "./config/_mixin";
import styled from "styled-components";
import { BackTop } from "antd";

const MainContainer = styled.section`
  position: relative;
  top: ${headerHeight};
`;

export const Router: React.SFC<{}> = ({}) => (
  <>
    <BackTop />
    <Header />
    <MainContainer>
      <Switch>
        <Route path="/user/sign_in" component={SignIn} />
        <Route path="/user/sign_up" component={SignUp} />
        <Route path="/posts/create" component={CreatePost} />
        <Route path="/posts/:postId" component={PostDetail} />
        <Route exact path="/" component={PostList} />
      </Switch>
    </MainContainer>
  </>
);
