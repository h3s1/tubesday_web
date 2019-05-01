import React from "react";
import Header from "../../Components/Header"
import styled from "styled-components"
import 'antd/dist/antd.css'
// import ClipCard from "../../Components/ClipCard"
import ClipList from "../../Components/ClipList"

interface IProps {
  searchedResults: any[]
}

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
        return <ClipList 
        // isSelected={true}
        // title="Just Test"
        // img="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        // channelId="Testing"
        // videoId=""
        searchedResults={this.props.searchedResults}
        />
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

