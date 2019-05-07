import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import axios from "axios";

const Search = Input.Search;

interface IProps {
  addSearchedResults(searchedResults: any[]): { type: string; payload: {} };
}
interface IState {
  searchText: string;
}

class SearchPresenter extends React.Component<IProps, IState> {
  state = { searchText: "" };

  handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.target.value });
  };

  async handleSearch() {
    const key = process.env.REACT_APP_GOOGLE_API_KEY;
    const { searchText } = this.state;
    const {
      data: { items }
    } = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchText}&key=${key}`
    );
    this.props.addSearchedResults(items);
  }
  render() {
    return (
      <Container>
        <Search
          placeholder="영상 / 채널 검색"
          style={{ width: "50vw" }}
          onChange={this.handleTextInput}
          onPressEnter={() => this.handleSearch()}
        />
      </Container>
    );
  }
}

const Container = styled.div``;

export default SearchPresenter;
