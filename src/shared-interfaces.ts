export interface IAvatar {
  id: number,
  nickname: string,
  email: string,
  avatarURL: string
}

export type Category = "new" | "hot"

export interface IComment {
  id: number,
  content: string,
  user: IAvatar,
  createdAt: string,
  updatedAt: string
}

export interface ISimplePost {
  id: number;
  title: string;
  videoId: string;
  content: string;
  user: IAvatar;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  commentCount: number;
}

export interface IPost {
  id: number,
  title: string,
  videoId: string,
  content: string,
  user: IAvatar;
  viewCount: number,
  createdAt: string,
  updatedAt: string,
  likeCount: number,
  tags: { content: string }[]
}
export interface GetArticleRes {
  config: Object,
  data: IPost,
  headers: Object,
  request: Object,
  status: number,
  statusText: "OK" | any
}

export interface GetArticlesRes {
  config: Object,
  data: ISimplePost[],
  headers: Object,
  request: Object,
  status: number,
  statusText: "OK" | any
}

