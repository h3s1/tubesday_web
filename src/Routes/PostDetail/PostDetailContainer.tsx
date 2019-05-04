import React, { createRef } from "react";
import { PostDetailPresenter } from "./PostDetailPresenter";
import { postApi } from "../../api";
import { IPost } from "../../shared-interfaces";

interface IProps {
  match: {
    params: {
      postId: string;
    };
  };
}

interface IState {
  status: string;
  data: IPost | null;
}

export default class PostDetailContainer extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: null,
      status: "success"
    };
  }

  private homeRef = createRef<HTMLDivElement>();
  private commentRef = createRef<HTMLDivElement>();
  private listRef = createRef<HTMLDivElement>();

  async componentDidMount() {
    console.log("didmount");
    try {
      const {
        match: {
          params: { postId }
        }
      } = this.props;
      const parsedId = parseInt(postId);
      const {
        data: { data: postData }
      } = await postApi.postDetail(parsedId);
      // const {
      //   data: { data: commentsData }
      // } = await postApi.comments(parsedId);
      this.setState({
        data: {
          ...postData,
          author: {
            profileImage:
              "https://hocpianoonline.com/wp-content/uploads/2019/01/Billie-Eilish-400x400.png",
            nickname: postData.author
          },
          tags: ["아이돌", "뮤비"],
          likes: 10,
          views: 20,
          comments: [
            {
              author: {
                profileImage:
                  "https://hocpianoonline.com/wp-content/uploads/2019/01/Billie-Eilish-400x400.png",
                nickname: "billie"
              },
              content: "hello"
            },
            {
              author: {
                profileImage:
                  "https://hocpianoonline.com/wp-content/uploads/2019/01/Billie-Eilish-400x400.png",
                nickname: "billie"
              },
              content: "hello"
            },
            {
              author: {
                profileImage:
                  "https://hocpianoonline.com/wp-content/uploads/2019/01/Billie-Eilish-400x400.png",
                nickname: "billie"
              },
              content: "hello"
            },
            {
              author: {
                profileImage:
                  "https://hocpianoonline.com/wp-content/uploads/2019/01/Billie-Eilish-400x400.png",
                nickname: "billie"
              },
              content: "hello"
            },
            {
              author: {
                profileImage:
                  "https://hocpianoonline.com/wp-content/uploads/2019/01/Billie-Eilish-400x400.png",
                nickname: "billie"
              },
              content: "hello"
            }
          ]
        }
      });
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
    const { data, status } = this.state;
    console.log(data);
    return (
      data &&
      status === "success" && (
        <PostDetailPresenter
          data={data}
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
