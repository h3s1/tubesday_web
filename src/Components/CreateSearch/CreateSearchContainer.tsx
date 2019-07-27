import React from "react";
import SearchPresenter from "./SearchPresenter";
import {withContext} from '../../contexts'

interface Props {
  actions: {addSearchedResults(searchedResults: any[]): { type: string; payload: {} }}
}
interface State {}

class CreateSearchContainer extends React.Component<Props, State> {
  render() {
    return (
      <SearchPresenter addSearchedResults={this.props.actions.addSearchedResults} />
    );
  }
}

export default withContext(CreateSearchContainer)
