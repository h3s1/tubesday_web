import React from "react";
import { ISimplePost } from "../shared-interfaces";
import styled from "styled-components";
import Avatar from "./Avatar";
import moment from "moment";

interface Props {
  article: ISimplePost;
}

const PostCardImage = styled.img`
  transition: 0.5s ease-in-out;
`;

const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  &:hover {
    ${PostCardImage} {
      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: bolder;
  margin: 1rem 0;
`;

const PostInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const PostInfoLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostInfoRight = styled.div`
  display: flex;
`;

const Datetime = styled.div`
  margin-right: 0.5rem;
`;

const CountableInfo = styled.div`
  display: flex;
`;

const CountableIcon = styled.i`
  margin: 0 0.1rem 0 0.5rem;
`;

const CountableNumber = styled.div``;

export const PostCard: React.SFC<Props> = ({ article: { id, title, videoId, content, user, viewCount, createdAt, updatedAt, likeCount, commentCount } }) => (
  <PostCardContainer>
    <PostCardImage
      src={`https://i1.ytimg.com/vi/${videoId}/mqdefault.jpg`}
      style={{ width: "100%", backgroundColor: "black" }}
    />
    <Title>{title}</Title>
    <PostInfoContainer>
      <PostInfoLeft>
        <Datetime>{moment(updatedAt).fromNow()}</Datetime>
        <Avatar style={"nicknameOnly"} user={user} />
      </PostInfoLeft>
      <PostInfoRight>
        <CountableInfo>
          <CountableIcon className="far fa-comments" />
          <CountableNumber>{commentCount}</CountableNumber>
        </CountableInfo>
        <CountableInfo>
          <CountableIcon className="far fa-thumbs-up" />
          <CountableNumber>{likeCount}</CountableNumber>
        </CountableInfo>
        <CountableInfo>
          <CountableIcon className="far fa-eye" />
          <CountableNumber>{viewCount}</CountableNumber>
        </CountableInfo>
      </PostInfoRight>
    </PostInfoContainer>
  </PostCardContainer>
);
