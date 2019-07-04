import axios from "axios";
import { ISimplePost, IPost } from './shared-interfaces';

const baseApi = axios.create({
  baseURL: "http://ec2-13-209-67-252.ap-northeast-2.compute.amazonaws.com:4321/"
});

type Category = "new" | "hot"

export const articleApi = {
  getArticles: (category: Category, pageNumber: number) => baseApi.get<ISimplePost[]>(`articles`, { params: {category, pageNumber}}),
  getArticle: (postId: number) => baseApi.get<IPost>(`articles/${postId}`),
  comments: (postId: number) => baseApi.get(`comment/${postId}`)
};
