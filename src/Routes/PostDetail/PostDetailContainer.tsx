import React from "react";
import { PostDetailPresenter } from "./PostDetailPresenter";

interface IProps {
  match: {
    params: {
      postId: string;
    };
  };
}

interface IState {}

export default class PostDetailContainer extends React.Component<
  IProps,
  IState
> {
  render() {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    console.log(this.props);
    return <PostDetailPresenter id={parseInt(postId)} />;
  }
}
