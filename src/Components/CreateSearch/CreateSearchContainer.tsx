import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addSearchedResults } from "../../actions";
import SearchPresenter from "./SearchPresenter";

interface Props {
  addSearchedResults(searchedResults: any[]): { type: string; payload: {} };
}
interface State {}

class CreateSearchContainer extends React.Component<Props, State> {
  render() {
    return (
      <SearchPresenter addSearchedResults={this.props.addSearchedResults} />
    );
  }
}

const mapStateToProps = (state: {}): {} => state;
const mapDispatchToProps = (dispatch: any) => {
  return {
    addSearchedResults: bindActionCreators(addSearchedResults, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSearchContainer);
