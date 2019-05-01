import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

interface IProps {
  id: number;
  data: {
    no: number;
    title: string;
    videoId: string;
    author: string;
    content: string;
    datetime: string;
  };
}

export const PostDetailPresenter: React.SFC<IProps> = ({ data, id }) => (
  <Container>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${data.videoId}`}
      playing={true}
      loop={true}
      controls={false}
      width="100%"
      height="100%"
      onReady={() => console.log("video ready")}
      onError={() => console.log("video error")}
      style={{
        transition: "3s ease-in-out",
        overflow: "hidden",
        position: "absolute",
        zIndex: -1
      }}
    />
    Post Detail of postId {id}
  </Container>
);
