import React from "react";
import { Avatar as AntAvatar } from "antd";
import { IAvatar } from "../shared-interfaces";
import styled from "styled-components";

interface IProps {
  user: IAvatar;
  style?: "photoOnly" | "nicknameOnly" | "both";
}

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AntAvatarStyle = {
  marginRight: "0.5rem"
};

export const Avatar: React.SFC<IProps> = ({
  user: { profileImage, nickname },
  style
}) =>
  profileImage ? (
    <AvatarContainer>
      {(style === "photoOnly" || style === "both" || style === undefined) && (
        <AntAvatar style={AntAvatarStyle} src={profileImage} />
      )}
      {(style === "nicknameOnly" || style === "both" || style === undefined) &&
        nickname}
    </AvatarContainer>
  ) : (
    <AvatarContainer>
      {(style === "photoOnly" || style === "both" || style === undefined) && (
        <AntAvatar style={AntAvatarStyle} icon="user">
          {nickname}
        </AntAvatar>
      )}
      {(style === "nicknameOnly" || style === "both" || style === undefined) &&
        nickname}
    </AvatarContainer>
  );
