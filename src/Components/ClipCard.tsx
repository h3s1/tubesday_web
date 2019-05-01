import React, {Fragment} from 'react'
import {Card} from 'antd'
import styled from "styled-components"

const {Meta} = Card

interface IProps{isSelected: boolean; title: string; channelId: string; videoId: string; img: string}

interface IWrapperProps{isSelected:boolean}

const ClipCard: React.SFC<IProps> = ({isSelected, title, img, channelId, videoId}) => (
  <Fragment>
  <HighLight isSelected={isSelected}><p>✔️</p></HighLight>
    <Card
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src={img} />}
  >
    <Meta
      title={title}
      description={channelId}
    />
  </Card>
  </Fragment>
)

const HighLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: IWrapperProps) => (props.isSelected? "#bbb" : "null")};
  width: 240px;
  height: 400px;
  position: absolute;
  opacity: 0.8;
  z-index: 10;
  p {
    font-size: 5vw
  } 
`

export default ClipCard