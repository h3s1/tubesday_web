import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addSearchedResults } from "../../actions";
import SearchPresenter from "./SearchPresenter";

interface IProps {
  addSearchedResults(searchedResults: any[]): { type: string; payload: {} };
}
interface IState {}

class CreateSearchContainer extends React.Component<IProps, IState> {
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
