import React, { createRef } from "react";
import { PostDetailPresenter } from "./PostDetailPresenter";
import { articleApi } from "../../api";
// import { IPost } from "../../shared-interfaces";

interface IProps {
  match: {
    params: {
      postId: string;
    };
  };
}

interface IState {
  status: string;
  article: any | null;
}

export default class PostDetailContainer extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      article: null,
      status: "success"
    };
  }

  private homeRef = createRef<HTMLDivElement>();
  private commentRef = createRef<HTMLDivElement>();
  private listRef = createRef<HTMLDivElement>();

  componentDidMount = async () => {
    try {
      const {
        match: {
          params: { postId }
        }
      } = this.props;
      const parsedId = parseInt(postId);
      const {data:article} = await articleApi.getArticle(parsedId);
      this.setState({ article });
    } catch (error) {
      alert(error);
    } finally {
    }
  }

  scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    console.log(
      sectionRef.current,
      sectionRef.current ? sectionRef.current.offsetTop : undefined
    );
    this.homeRef &&
      this.homeRef.current &&
      window.scrollTo({
        top: sectionRef.current
          ? sectionRef.current.offsetTop - this.homeRef.current.offsetTop
          : undefined,
        behavior: "smooth"
      });
  };

  render() {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    const { article, status } = this.state;
    console.log(article);
    return (
      article &&
      status === "success" && (
        <PostDetailPresenter
        article={article}
          id={parseInt(postId)}
          scrollToSection={this.scrollToSection}
          homeRef={this.homeRef}
          commentRef={this.commentRef}
          listRef={this.listRef}
        />
      )
    );
  }
}
