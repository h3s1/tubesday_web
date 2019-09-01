import React, { createRef } from "react";
import { PostDetailPresenter } from "./PostDetailPresenter";
import { articleApi } from "../../api";
import { IPost, IComment, ISimplePost } from "../../shared-interfaces";

interface Props {
  match: {
    params: {
      postId: string;
    };
  };
}

interface State {
  status: string;
  article: IPost | null;
  recommendations: ISimplePost[];
  comments: IComment[];
}

export default class PostDetailContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      article: null,
      comments: [],
      recommendations: [],
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
      const [
        { data: article },
        { data: comments },
        { data: recommendations }
      ] = await articleApi.getArticle(parsedId);
      this.setState({ article, comments, recommendations });
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
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
    const { article, comments, recommendations, status } = this.state;
    console.log(article, comments, recommendations);
    return (
      article &&
      status === "success" && (
        <PostDetailPresenter
          article={article}
          comments={comments}
          recommendations={recommendations}
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
