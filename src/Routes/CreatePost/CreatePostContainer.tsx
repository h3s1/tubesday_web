import React from "react";
import {connect} from 'react-redux'
import CreatePostPresenter from "./CreatePostPresenter";


interface IProps {}

interface IState {}

class CreatePostContainer extends React.Component<
  IProps,
  IState
> {
  render() {
    return <CreatePostPresenter />;
  }
}

const mapStateToProps = (state:{}):{} => state;


export default connect(mapStateToProps)(CreatePostContainer)