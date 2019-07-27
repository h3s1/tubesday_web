import React from "react";
import CreatePostPresenter from "./CreatePostPresenter";
import { withContext } from "../../contexts";

interface Props {
  data: {searchedResults: any[]}
}

interface State {
  searchedResults: any[];
}

class CreatePostContainer extends React.Component<Props, State> {
  state = { searchedResults: [] };

  componentDidUpdate(prevProps: {}, prevState: {}) {
    if (prevProps !== this.props) {
      this.setState({ searchedResults: this.props.data.searchedResults });
    }
  }

  render() {
    return <CreatePostPresenter searchedResults={this.state.searchedResults} />;
  }
}

export default withContext(CreatePostContainer)
