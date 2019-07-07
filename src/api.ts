import axios from "axios";
import { ISimplePost,  IComment, Category, IPost, CreateArticleParameter } from './shared-interfaces';

const baseApi = axios.create({
  baseURL: "https://youtupia-dev.herokuapp.com/"
});


export const articleApi = {
  getArticles: (category: Category, pageNumber: number) => baseApi.get<ISimplePost[]>(`articles`, { params: {category, pageNumber}}),
  getArticle: (article_id: number) => 
    axios.all<any>([
    baseApi.get<IPost>(`articles/${article_id}`),
    baseApi.get<IComment[]>(`articles/${article_id}/comments`),
    baseApi.get<ISimplePost[]>(`recommendations`)
  ]),
  postArticle: ({title, video_id, content, tags}: CreateArticleParameter) => baseApi.post<IPost>(`articles/`, {title, video_id, content, tags})
};
