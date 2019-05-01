import axios from "axios";

const api = axios.create({
  baseURL: "http://youtopia.zerobell.xyz/"
});

export const postApi = {
  postDetail: (postId: number) => api.get(`article/${postId}`)
};
