import React from "react";
import { PostListPresenter } from "./PostListPresenter";
import {  ISimplePost, Category } from "../../shared-interfaces";
import { articleApi } from '../../api';

interface Props {}

interface State {
  articles: ISimplePost[],
  menu: Category;
}

export default class PostListContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      articles: [],
      menu: "new"
    };
  }

  onClickMenuChange = (menu: Category) => {
    this.setState({ menu });
  };

  componentDidMount = async () => {
    const { menu } = this.state;
    const { data : articles } = await articleApi.getArticles(menu, 1);
    this.setState({ articles })
  }

  componentDidUpdate = async (prevProps: Props, prevState: State) => {
    if (this.state.menu !== prevState.menu) {
      const { menu } = this.state;
      const { data: articles } = await articleApi.getArticles(menu, 1);
      this.setState({articles})
    }
  }

  render() {
    const { menu, articles } = this.state;
    console.log(articles)
    return (
      <PostListPresenter
        onClickMenuChange={this.onClickMenuChange}
        menu={menu}
        articles={articles}
      />
    );
  }
}
