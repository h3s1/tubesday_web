import React from "react";
import { PostListPresenter } from "./PostListPresenter";

interface IProps {}

interface IState {
  currentMenu: string;
}

export default class PostListContainer extends React.Component<IProps, IState> {
  render() {
    return <PostListPresenter />;
  }
}
