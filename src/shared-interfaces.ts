export interface IAvatar {
  profileImage?: string;
  nickname: string;
}

export interface IComment {
  author: IAvatar;
  content: string;
}

export interface IPost {
  no: number;
  videoId: string;
  tags: string[];
  title: string;
  author: IAvatar;
  content: string;
  datetime: string;
  likes: number;
  comments: IComment[];
  views: number;
}

export interface IPostSimple {
  no: number;
  videoId: string;
  tags: string[];
  title: string;
  author: IAvatar;
  datetime: string;
  likes: number;
  views: number;
  commentsCount: number;
}
