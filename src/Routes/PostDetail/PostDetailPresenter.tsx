import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import  Avatar  from "../../Components/Avatar";
import { IPost, IComment } from "../../shared-interfaces";
import { headerHeight } from "../../config/_mixin";

const PlayerWrapper = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  top: ${headerHeight};
  height: 54vw; /* Player ratio: 100 / (1280 / 720) */
`;

/* z-index of fixed position should be 2 */
const FixedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 3rem;
`;

const PostDetailContainer = styled.div`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
`;

const FakeHeader = styled.div`
  width: 100%;
  height: 54vw; /* Player ratio: 100 / (1280 / 720) */
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5rem 0 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

const Tag = styled.div`
  color: #46abf3;
  font-weight: 700;
  font-size: 0.8rem;
  padding-right: 0.5rem;
  cursor: pointer;
`;

const SubInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const CountableInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
`;

const CountableInfoIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const CountableInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CountableNumber = styled.div``;

const Datetime = styled.div``;

const Content = styled.div``;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
`;

const Comments = styled.div`
  height: 100%;
  ${Comment}:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CommentsHeader = styled.div`
  padding: 0.5rem 2rem 0.5rem 1rem;
`;

const CommentContent = styled.div``;

const ShortcutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Shortcut = styled.button`
  position: relative;
  padding: 0.5rem 0;
  border: 0.3px solid rgba(0, 0, 0, 0.2);
  transition: 0.5s ease;
  z-index: 3;
  &:hover {
    z-index: 5;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  }
`;

const ShortcutIcon = styled.i``;

const PostList = styled.div``;

/* Change if PostList finished */
// const DummyPost = styled.img`
//   width: 100%;
// `;

interface Props {
  id: number;
  article: IPost;
  comments: IComment[];
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  homeRef: React.RefObject<HTMLDivElement>;
  commentRef: React.RefObject<HTMLDivElement>;
  listRef: React.RefObject<HTMLDivElement>;
}

export const PostDetailPresenter: React.SFC<Props> = ({
  article: {
    id, title, video_id, content, author_id, view_count, createdAt, updatedAt, like_count, tags
  },
  comments,
  scrollToSection,
  homeRef,
  commentRef,
  listRef
}) => (
  <>
    <PlayerWrapper className="player-wrapper">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${video_id}`}
        playing={false}
        loop={true}
        controls={false}
        width="100%"
        height="100%"
        onReady={() => console.log("video ready")}
        onError={() => console.log("video error")}
        style={{
          position: "absolute",
          top: 0,
          left: 0
        }}
      />
    </PlayerWrapper>
    <FixedContainer>
      <FakeHeader />
      <ShortcutContainer>
        <Shortcut onClick={() => scrollToSection(homeRef)}>
          <ShortcutIcon className="fas fa-home" />
        </Shortcut>
        <Shortcut onClick={() => scrollToSection(commentRef)}>
          <ShortcutIcon className="far fa-comments" />
        </Shortcut>
        <Shortcut onClick={() => scrollToSection(listRef)}>
          <ShortcutIcon className="far fa-list-alt" />
        </Shortcut>
      </ShortcutContainer>
    </FixedContainer>
    <FakeHeader />
    <PostDetailContainer ref={homeRef}>
      <TagContainer>
        {tags && tags.map(({content}: {content: string}) => (
          <Tag>#{content}</Tag>
        ))}
      </TagContainer>
      <Title>{title}</Title>
      <SubInfoContainer>
        {/* <Avatar user={article.author_id} /> */}
        <Datetime>{createdAt}</Datetime>
      </SubInfoContainer>
      <CountableInfoContainer>
        <CountableInfo>
          <CountableInfoIcon className="far fa-comments" />
          {/* <CountableNumber>{comment_count}</CountableNumber> */}
        </CountableInfo>
        <CountableInfo>
          <CountableInfoIcon className="far fa-thumbs-up" />
          <CountableNumber>{like_count}</CountableNumber>
        </CountableInfo>
        <CountableInfo>
          <CountableInfoIcon className="far fa-eye" />
          <CountableNumber>{view_count}</CountableNumber>
        </CountableInfo>
      </CountableInfoContainer>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </PostDetailContainer>
    <Comments ref={commentRef}>
      <CommentsHeader>
        댓글 | 총 <strong>{comments.length}</strong> 개
      </CommentsHeader>
      {comments.map((comment: IComment) => {
        console.log(comment);
        return (
          <Comment>
            <Avatar user_id={comment.author_id} />
            <CommentContent>{comment.content}</CommentContent>
          </Comment>
        );
      })}
    </Comments>
    <PostList ref={listRef}>
    </PostList>
  </>
);
