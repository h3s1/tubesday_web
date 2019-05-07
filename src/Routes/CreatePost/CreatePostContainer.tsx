import React from "react";
import { connect } from "react-redux";
import CreatePostPresenter from "./CreatePostPresenter";

interface IProps {
  searchedResults: any[];
}

interface IState {
  searchedResults: any[];
}

class CreatePostContainer extends React.Component<IProps, IState> {
  state = { searchedResults: [] };

  componentDidUpdate(prevProps: {}, prevState: {}) {
    if (prevProps !== this.props) {
      this.setState({ searchedResults: this.props.searchedResults });
    }
  }

  render() {
    return <CreatePostPresenter searchedResults={this.state.searchedResults} />;
  }
}

const mapStateToProps = (state: {}): {} => state;

export default connect(mapStateToProps)(CreatePostContainer);
