import React from "react";
import { connect } from "react-redux";
import CreatePostPresenter from "./CreatePostPresenter";

interface Props {
  searchedResults: any[];
}

interface State {
  searchedResults: any[];
}

class CreatePostContainer extends React.Component<Props, State> {
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
