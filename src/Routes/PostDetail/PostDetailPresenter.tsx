import React from "react";

interface IProps {
  id: number;
}

export const PostDetailPresenter: React.SFC<IProps> = ({ id }) => (
  <div>Post Detail of postId {id}</div>
);
