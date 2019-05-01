import React from "react";
import { CreatePostPresenter } from "./CreatePostPresenter";

interface IProps {}

interface IState {}

export default class CreatePostContainer extends React.Component<
  IProps,
  IState
> {
  render() {
    return <CreatePostPresenter />;
  }
}
