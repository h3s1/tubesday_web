import React from "react";
<<<<<<< HEAD
import PostCreateHeader from "../../Components/PostCreateHeader";
import styled from "styled-components";
import ClipList from "../../Components/ClipList";
import PostForm from "../../Components/PostForm";
import PostView from "../../Components/PostView";
||||||| 303f24c... feat: add event handler to update states
import Header from "../../Components/Header"
import styled from "styled-components"
import 'antd/dist/antd.css'
import ClipList from "../../Components/ClipList"
import PostForm from "../../Components/PostForm"
import PostView from "../../Components/PostView"
=======
import Header from "../../Components/Header"
import styled from "styled-components"
import 'antd/dist/antd.css'
import ClipList from "../../Components/ClipList"
import PostForm from "../../Components/PostForm"
>>>>>>> parent of 303f24c... feat: add event handler to update states

interface IProps {
<<<<<<< HEAD
  searchedResults: object[];
||||||| 303f24c... feat: add event handler to update states
  searchedResults: object[]
=======
  searchedResults: any[]
>>>>>>> parent of 303f24c... feat: add event handler to update states
}

interface IState {
<<<<<<< HEAD
  type: string;
  selectedResult: {};
  post: {
    title: string;
    content: string;
    tags: string[];
  };
||||||| 303f24c... feat: add event handler to update states
  type: string;
  selectedResult: {};
  post: {
    title: string;
    content: string;
    tags:string[]
  }
=======
  type: string,
  selectedResult: {}
>>>>>>> parent of 303f24c... feat: add event handler to update states
}

export default class CreatePostPresenter extends React.Component<
  IProps,
  IState
> {
<<<<<<< HEAD
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
||||||| 303f24c... feat: add event handler to update states
  constructor(props:{searchedResults: object[]}) {
    super(props)
    this.state = {
      type: "search_results", 
      selectedResult: {},
      post: {
        title: "",
        content: "",
        tags: [""]
      }
    }
  }
=======
  state = {type: "search_results", selectedResult: {}}
>>>>>>> parent of 303f24c... feat: add event handler to update states

  handleNext(selectedResult: {}) {
    this.setState({
      type: "form",
      selectedResult
    });
  }

<<<<<<< HEAD
  handleInput(post: { title: string; content: string; tags: string[] }): void {
    this.setState({
      post
    });
  }

||||||| 303f24c... feat: add event handler to update states
  handleInput(post:{
    title:string;
    content:string;
    tags: string[]
  }):void {
    this.setState({
      post,
      
    })
  }

=======
>>>>>>> parent of 303f24c... feat: add event handler to update states
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
<<<<<<< HEAD
        return (
          <PostForm
            selectedResult={this.state.selectedResult}
          />
        );
||||||| 303f24c... feat: add event handler to update states
        return <PostForm 
        selectedResult={this.state.selectedResult} 
        handleInputSubmit={this.handleInput.bind(this)}
        />
=======
        return <PostForm selectedResult={this.state.selectedResult}/>
>>>>>>> parent of 303f24c... feat: add event handler to update states
      case "view":
<<<<<<< HEAD
        return (
          <PostView
            created={{
              selectedResult: this.state.selectedResult,
              post: this.state.post
            }}
          />
        );
||||||| 303f24c... feat: add event handler to update states
        return <PostView 
          created={{selectedResult: this.state.selectedResult, post: this.state.post}}
        />
=======
        return <div>View</div> 
>>>>>>> parent of 303f24c... feat: add event handler to update states
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
