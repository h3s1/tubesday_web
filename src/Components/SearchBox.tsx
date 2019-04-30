import React from "react"
import styled from 'styled-components'
import {Input} from "antd"
import axios from 'axios'

const Search = Input.Search;

interface IProps {}
interface IState { searchText: string}

class SearchBox extends React.Component<IProps, IState> {
  state = {searchText: ""}

  handleTextInput (e: any) {
    this.setState({searchText: e.target.value})
  }

  async handleSearch() {
    const key: string = "AIzaSyCSRYRn55nm_-CWnJV9HxoRLwyMm215X2w"
    const {searchText} = this.state
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchText}&key=${key}`)
    console.log(res.data.items)
  }
  render() {
    console.log(this.state)
    return (
      <Container>
          <Search style={{width: "50vw"}} onChange={e=>this.handleTextInput(e)} onPressEnter={() => this.handleSearch()}/>
      </Container>
    );
  }
}

const Container = styled.div``

export default SearchBox