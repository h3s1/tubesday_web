import React from "react";
import { PostListPresenter } from "./PostListPresenter";
import { IPostSimple } from "../../shared-interfaces";

interface IProps {}

interface IState {
  menu: "recent" | "hot";
}

const recentPosts: IPostSimple[] = [
  {
    no: 1,
    videoId: "cG7FkoNKBzI",
    tags: ["아이돌", "뮤비"],
    title: "대망의 첫번째 글임",
    author: {
      profileImage:
        "https://heightline.com/wp-content/uploads/Billie-Eilish-681x534.jpg",
      nickname: "카드값줘최리"
    },
    datetime: "2019-04-05 13:00:00",
    likes: 10,
    views: 20,
    commentsCount: 5
  },
  {
    no: 2,
    videoId: "v7qisJ_KuYI",
    tags: ["아이돌", "뮤비"],
    title: "이건 두번째 글임",
    author: {
      profileImage:
        "https://heightline.com/wp-content/uploads/Billie-Eilish-681x534.jpg",
      nickname: "슈퍼스타케이"
    },
    datetime: "2018-04-05 13:13:25",
    likes: 10,
    views: 20,
    commentsCount: 5
  },
  {
    no: 3,
    videoId: "_XulUbBra5M",
    tags: ["개미", "다큐멘터리"],
    title: "아이돌 글 좀 그만 올려라 십덕새기들아",
    author: {
      profileImage:
        "https://heightline.com/wp-content/uploads/Billie-Eilish-681x534.jpg",
      nickname: "스피드웨건"
    },
    datetime: "2017-04-06 01:12:24",
    likes: 10,
    views: 20,
    commentsCount: 5
  }
];

const hotPosts: IPostSimple[] = [
  {
    no: 1,
    videoId: "_g6ggSNn4YU",
    tags: ["병신TV", "장보기"],
    title: "내일 살 거",
    author: {
      profileImage:
        "https://heightline.com/wp-content/uploads/Billie-Eilish-681x534.jpg",
      nickname: "카드값줘최리"
    },
    datetime: "2019-04-05 13:00:00",
    likes: 10,
    views: 20,
    commentsCount: 5
  },
  {
    no: 2,
    videoId: "TcMBFSGVi1c",
    tags: ["마블", "트레일러"],
    title: "마블짱",
    author: {
      profileImage:
        "https://heightline.com/wp-content/uploads/Billie-Eilish-681x534.jpg",
      nickname: "슈퍼스타케이"
    },
    datetime: "2018-04-05 13:13:25",
    likes: 10,
    views: 20,
    commentsCount: 5
  },
  {
    no: 3,
    videoId: "DyDfgMOUjCI",
    tags: ["뮤비", "빌리 아일리쉬"],
    title: "빌리 아일리쉬 - 뱃가이",
    author: {
      profileImage:
        "https://heightline.com/wp-content/uploads/Billie-Eilish-681x534.jpg",
      nickname: "스피드웨건"
    },
    datetime: "2017-04-06 01:12:24",
    likes: 10,
    views: 20,
    commentsCount: 5
  }
];

export default class PostListContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      menu: "hot"
    };
  }

  onClickMenuChange = (menu: "recent" | "hot") => {
    this.setState({ menu });
  };

  render() {
    const { menu } = this.state;
    let posts = hotPosts;
    if (menu === "recent") {
      posts = recentPosts;
    } else if (menu === "hot") {
      posts = hotPosts;
    }
    return (
      <PostListPresenter
        onClickMenuChange={this.onClickMenuChange}
        menu={menu}
        posts={posts}
      />
    );
  }
}
