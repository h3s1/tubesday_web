import React from 'react'
import {Card} from 'antd'
import styled from "styled-components"

const {Meta} = Card

interface IProps{isSelected: boolean; title: string; channelId: string; videoId: string; img: string; key:number}

interface IWrapperProps{isSelected:boolean}

const ClipCard: React.SFC<IProps> = ({isSelected, title, img, channelId, videoId}) => (
  <Container>
  <HighLight isSelected={isSelected}>
  {/* <p>✔️</p> */}
  </HighLight>
    <Card
    hoverable
    style={{ width: "100%"}}
    cover={<img alt="example" src={img} />}
  >
    <Meta
      title={title}
      description={channelId}
    />
  </Card>
  </Container>
)

const Container =styled.div`
  width: 100%;
`


const HighLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: IWrapperProps) => (props.isSelected? "#bbb" : "none")};
  width: 100%;
  position: absolute;
  opacity: 0.8;
  z-index: ${(props: IWrapperProps) => (props.isSelected? "2" : "0")}
  p {
    font-size: 5vw
  } 
`

export default ClipCard