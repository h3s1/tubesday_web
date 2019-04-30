import React from "react"
import styled from 'styled-components'
import {Input} from "antd"
// import axios from 'axios'

const Search = Input.Search;

interface IProps {}
interface IState { searchText: string}

class SearchBox extends React.Component<IProps, IState> {
  state = {searchText: ""}

  handleTextInput (e: any) {
    this.setState({searchText: e.target.value})
  }
  render() {
    console.log(this.state.searchText)
    return (
      <Container>
          <Search style={{width: "50vw"}} onChange={e=>this.handleTextInput(e)}/>
      </Container>
    );
  }
}

const Container = styled.div``

export default SearchBox