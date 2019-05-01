import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const PlayerWrapper = styled.div`
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

/* z-index of fixed position should be 2 */
const FixedContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 3rem;
`;

const PostDetailContainer = styled.div`
  position: relative;
  top: 3rem;
`;

const FakeHeader = styled.div`
  width: 100%;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
`;

const Author = styled.div``;

const Content = styled.div``;

const Datetime = styled.div``;

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

export const PostDetailPresenter: React.SFC<IProps> = ({
  data: { videoId, title, author, content, datetime },
  id
}) => (
  <>
    <FixedContainer>
      <PlayerWrapper className="player-wrapper">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
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
    </FixedContainer>
    <PostDetailContainer>
      <FakeHeader />
      <Title>제목: {title}</Title>
      <Author>글쓴이: {author}</Author>
      <Datetime>날짜: {datetime}</Datetime>
      <Content>내용: {content}</Content>
      Post Detail of postId {id}
      Buddy, you're a boy, make a big noise Playing in the street, gonna be a
      big man someday You got mud on your face, you big disgrace Kicking your
      can all over the place, singin' We will, we will rock you We will, we will
      rock you Buddy, you're a young man, hard man Shouting in the street, gonna
      take on the world someday You got blood on your face, you big disgrace
      Waving your banner all over the place We will, we will rock you, sing it!
      We will, we will rock you, yeah Buddy, you're an old man, poor man
      Pleading with your eyes, gonna get you some peace someday You got mud on
      your face, big disgrace Somebody better put you back into your place, do
      it! We will, we will rock you, yeah, yeah, come on We will, we will rock
      you, alright, louder! We will, we will rock you, one more time We will, we
      will rock you YeahBuddy, you're a boy, make a big noise Playing in the
      street, gonna be a big man someday You got mud on your face, you big
      disgrace Kicking your can all over the place, singin' We will, we will
      rock you We will, we will rock you Buddy, you're a young man, hard man
      Shouting in the street, gonna take on the world someday You got blood on
      your face, you big disgrace Waving your banner all over the place We will,
      we will rock you, sing it! We will, we will rock you, yeah Buddy, you're
      an old man, poor man Pleading with your eyes, gonna get you some peace
      someday You got mud on your face, big disgrace Somebody better put you
      back into your place, do it! We will, we will rock you, yeah, yeah, come
      on We will, we will rock you, alright, louder! We will, we will rock you,
      one more time We will, we will rock you YeahBuddy, you're a boy, make a
      big noise Playing in the street, gonna be a big man someday You got mud on
      your face, you big disgrace Kicking your can all over the place, singin'
      We will, we will rock you We will, we will rock you Buddy, you're a young
      man, hard man Shouting in the street, gonna take on the world someday You
      got blood on your face, you big disgrace Waving your banner all over the
      place We will, we will rock you, sing it! We will, we will rock you, yeah
      Buddy, you're an old man, poor man Pleading with your eyes, gonna get you
      some peace someday You got mud on your face, big disgrace Somebody better
      put you back into your place, do it! We will, we will rock you, yeah,
      yeah, come on We will, we will rock you, alright, louder! We will, we will
      rock you, one more time We will, we will rock you YeahBuddy, you're a boy,
      make a big noise Playing in the street, gonna be a big man someday You got
      mud on your face, you big disgrace Kicking your can all over the place,
      singin' We will, we will rock you We will, we will rock you Buddy, you're
      a young man, hard man Shouting in the street, gonna take on the world
      someday You got blood on your face, you big disgrace Waving your banner
      all over the place We will, we will rock you, sing it! We will, we will
      rock you, yeah Buddy, you're an old man, poor man Pleading with your eyes,
      gonna get you some peace someday You got mud on your face, big disgrace
      Somebody better put you back into your place, do it! We will, we will rock
      you, yeah, yeah, come on We will, we will rock you, alright, louder! We
      will, we will rock you, one more time We will, we will rock you Yeah
    </PostDetailContainer>
  </>
);
