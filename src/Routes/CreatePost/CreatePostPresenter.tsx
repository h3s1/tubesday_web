import React from "react";
import Header from "../../Components/Header"
import styled from "styled-components"
import 'antd/dist/antd.css'
import ClipList from "../../Components/ClipList"
import PostForm from "../../Components/PostForm"

interface IProps {
  searchedResults: any[]
}

interface IState {
  type: string,
  selectedResult: {}
}

export default class CreatePostPresenter extends React.Component<
  IProps,
  IState
> {
  state = {type: "search_results", selectedResult: {}}

  handleNext(selectedResult:{}) {
    this.setState({
      type: "form",
      selectedResult
    })
  }

  renderContent() {
    switch(this.state.type) {
      case "search_results":
        return <ClipList 
        searchedResults={this.props.searchedResults}
        handleNext={this.handleNext.bind(this)}
        />
      case "form":
        return <PostForm selectedResult={this.state.selectedResult}/>
      case "view":
        return <div>View</div> 
      default:
        return null
    }
  }

  render() {
    return (
      <MainContainer>
    <Header />
    <ContentContainer>{this.renderContent()}</ContentContainer>

  </MainContainer>
    )
  }
}

const MainContainer = styled.div`
`

const ContentContainer = styled.div`
  margin-top: 12vh;
  display: flex;
  justify-content: center;
`

