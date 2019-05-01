import React from "react"
import styled from 'styled-components'
import {Input} from "antd"
import axios from 'axios'

const Search = Input.Search;

interface IProps {addSearchedResults(searchedResults: any[]): {type: string; payload: {}}}
interface IState { searchText: string}

class SearchPresenter extends React.Component<IProps, IState> {
  state = {searchText: ""}

  handleTextInput (e: any) {
    this.setState({searchText: e.target.value})
  }

  async handleSearch() {
    const key = process.env.REACT_APP_GOOGLE_API_KEY
    const {searchText} = this.state
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchText}&key=${key}`)
    this.props.addSearchedResults(res.data.items)
  }
  render() {
    return (
      <Container>
          <Search style={{width: "50vw"}} onChange={e=>this.handleTextInput(e)} onPressEnter={() => this.handleSearch()}/>
      </Container>
    );
  }
}

const Container = styled.div``

export default SearchPresenter