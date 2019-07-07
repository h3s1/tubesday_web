import axios from "axios";
import { ISimplePost, IPost, IComment, Category } from './shared-interfaces';

const baseApi = axios.create({
  baseURL: "https://youtupia-dev.herokuapp.com/"
});


export const articleApi = {
  getArticles: (category: Category, pageNumber: number) => baseApi.get<ISimplePost[]>(`articles`, { params: {category, pageNumber}}),
  getArticle: (article_id: number) => 
  axios.all<any>([
    baseApi.get<IPost>(`articles/${article_id}`),
    baseApi.get<IComment[]>(`articles/${article_id}/comments`),
  ]),
};
