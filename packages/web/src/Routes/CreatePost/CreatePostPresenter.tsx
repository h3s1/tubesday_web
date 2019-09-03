import React from "react";
import PostCreateHeader from "../../Components/PostCreateHeader";
import styled from "styled-components";
import ClipList from "../../Components/ClipList";
import CreateForm from "../../Components/CreateForm";

interface Props {
  searchedResults: object[];
}

interface State {
  type: string;
  selectedResult: {};
  post: {
    title: string;
    content: string;
    tags: string[];
  };
}

export default class CreatePostPresenter extends React.Component<
  Props,
  State
> {
  constructor(props: { searchedResults: object[] }) {
    super(props);
    this.state = {
      type: "search_results",
      selectedResult: {},
      post: {
        title: "",
        content: "",
        tags: [""]
      }
    };
  }

  handleNext(selectedResult: {}) {
    this.setState({
      type: "form",
      selectedResult
    });
  }

  handleInput(post: { title: string; content: string; tags: string[] }): void {
    this.setState({
      post
    });
  }

  renderContent() {
    switch (this.state.type) {
      case "search_results":
        return (
          <ClipList
            searchedResults={this.props.searchedResults}
            handleNext={this.handleNext.bind(this)}
          />
        );
      case "form":
        return <CreateForm selectedResult={this.state.selectedResult} />;
      default:
        return null;
    }
  }

  render() {
    const { type } = this.state;
    return (
      <MainContainer>
        <PostCreateHeader type={type} />
        <ContentContainer>{this.renderContent()}</ContentContainer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;
