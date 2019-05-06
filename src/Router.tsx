import React from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "./Routes/PostList";
import PostDetail from "./Routes/PostDetail";
import CreatePost from "./Routes/CreatePost";
import Header from "./Components/Header";

export const Router: React.SFC<{}> = ({}) => (
  <>
    <Header />
    <Switch>
      <Route path="/posts/create" component={CreatePost} />
      <Route path="/posts/:postId" component={PostDetail} />
      <Route exact path="/" component={PostList} />
    </Switch>
  </>
);
