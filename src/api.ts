import axios from "axios";
import { ISimplePost, IPost, IComment, Category } from './shared-interfaces';

const baseApi = axios.create({
  baseURL: "http://ec2-13-209-67-252.ap-northeast-2.compute.amazonaws.com:4321/"
});


export const articleApi = {
  getArticles: (category: Category, pageNumber: number) => baseApi.get<ISimplePost[]>(`articles`, { params: {category, pageNumber}}),
  getArticle: (article_id: number) => 
  axios.all<any>([
    baseApi.get<IPost>(`articles/${article_id}`),
    baseApi.get<IComment[]>(`articles/${article_id}/comments`),
  ]),
  comments: (postId: number) => baseApi.get(`comment/${postId}`)
};
