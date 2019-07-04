export interface IAvatar {
  profileImage?: string;
  nickname: string;
}

export interface IComment {
  id: number,
  content: string,
  article: number,
  author_id: number,
  createdAt: string,
  updatedAt: string
}

export interface ISimplePost {
  id: number;
  title: string;
  video_id: string;
  content: string;
  author_id: number;
  view_count: number;
  createdAt: string;
  updatedAt: string;
  like_count: number;
  comment_count: number;
}

export interface IPost {
  id: number,
  title: string,
  video_id: string,
  content: string,
  author_id: number,
  view_count: number,
  createdAt: string,
  updatedAt: string,
  like_count: number,
  tags: { content: string }[]
}
export interface GetArticleRes {
  config: Object,
  data: IPost,
  headers: Object,
  request:Object,
  status: number,
  statusText: "OK" | any
}

export interface GetArticlesRes {
  config: Object,
  data: ISimplePost[],
  headers: Object,
  request:Object,
  status: number,
  statusText: "OK" | any
}

