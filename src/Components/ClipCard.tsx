import React, { Fragment } from "react";
import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

interface IProps {
  isSelected: boolean;
  title: string;
  channelId: string;
  videoId: string;
  img: string;
  key: number;
}

interface IWrapperProps {
  isSelected: boolean;
}

const ClipCard: React.SFC<IProps> = ({
  isSelected,
  title,
  img,
  channelId,
  videoId
}) => (
  <Fragment>
    <HighLight isSelected={isSelected}>
      <p>✔️</p>
    </HighLight>
    <CustomCard
      size="small"
      hoverable
      cover={<Thumbnail alt="example" src={img} />}
    >
      <Meta title={title} description={channelId} />
    </CustomCard>
  </Fragment>
);

const CustomCard = styled(Card)`
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const HighLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: IWrapperProps) => (props.isSelected ? "#bbb" : "none")};
  width: 100%;
  height: 480px;
  position: absolute;
  opacity: 0.8;
  z-index: ${(props: IWrapperProps) => (props.isSelected ? "2" : "0")} p {
    font-size: 5vw;
  }
`;

export default ClipCard;
