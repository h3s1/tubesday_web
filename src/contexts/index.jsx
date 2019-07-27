import React, { Component, createContext } from "react";

const Context = createContext();

const { Provider, Consumer: DataConsumer } = Context;

class DataProvider extends Component {
  state = { searchedResults: [] };
  actions = {
    addSearchedResults: searchedResults => this.setState({ searchedResults })
  };
  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function withContext(WrappedComponent) {
  return function useData(props) {
    return (
      <DataConsumer>
        {({ state, actions }) => (
          <WrappedComponent
            contextState={state}
            actions={actions}
            contextProps={props}
          />
        )}
      </DataConsumer>
    );
  };
}

export { DataProvider, DataConsumer, withContext };
