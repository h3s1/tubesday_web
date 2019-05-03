import React from "react";
import { Avatar as AntAvatar } from "antd";
import { IAvatar } from "../shared-interfaces";
import styled from "styled-components";

interface IProps {
  user: IAvatar;
}

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AntAvatarStyle = {
  marginRight: "0.5rem"
};

export const Avatar: React.SFC<IProps> = ({
  user: { profileImage, nickname }
}) =>
  profileImage ? (
    <AvatarContainer>
      <AntAvatar style={AntAvatarStyle} src={profileImage} />
      {nickname}
    </AvatarContainer>
  ) : (
    <AvatarContainer>
      <AntAvatar style={AntAvatarStyle} icon="user">
        {nickname}
      </AntAvatar>
    </AvatarContainer>
  );
