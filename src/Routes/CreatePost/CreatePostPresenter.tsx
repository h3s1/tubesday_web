import React from "react";
import PostCreateHeader from "../../Components/PostCreateHeader";
import styled from "styled-components";
import ClipList from "../../Components/ClipList";
import PostForm from "../../Components/PostForm";
import PostView from "../../Components/PostView";

interface IProps {
  searchedResults: object[];
}

interface IState {
  type: string;
  selectedResult: {};
  post: {
    title: string;
    content: string;
    tags: string[];
  };
}

export default class CreatePostPresenter extends React.Component<
  IProps,
  IState
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
        return (
          <PostForm
            selectedResult={this.state.selectedResult}
          />
        );
      case "view":
        return (
          <PostView
            created={{
              selectedResult: this.state.selectedResult,
              post: this.state.post
            }}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const {type} = this.state
    return (
      <MainContainer>
        <PostCreateHeader type={type}/>
        <ContentContainer>{this.renderContent()}</ContentContainer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;



const ContentContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`;
