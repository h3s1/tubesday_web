export interface IAvatar {
  profileImage: string | undefined;
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
