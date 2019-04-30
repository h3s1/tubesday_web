import React from "react";
import Header from "../../Components/Header"
import styled from "styled-components"
import 'antd/dist/antd.css'

interface IProps {}

interface IState {
  type: string
}
export default class CreatePostPresenter extends React.Component<
  IProps,
  IState
> {

  state = {type: "search_results"}

  renderContent() {
    switch(this.state.type) {
      case "search_results":
        return <div>Search Results</div>
      case "form":
        return <div>Form</div>
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

const MainContainer = styled.div``

const ContentContainer = styled.div`
  margin-top: 10vh;
`

