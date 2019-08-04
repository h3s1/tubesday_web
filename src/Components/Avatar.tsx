import React from "react";
import { Avatar as AntAvatar } from "antd";
import { IAvatar } from "../shared-interfaces";
import styled from '../typed-components';

interface Props {
  user: {
    id: number,
    nickname: string,
    email: string,
    avatarURL: string,
  },
  style?: "photoOnly" | "nicknameOnly" | "both";
}

interface State {
  user: IAvatar | null;
}

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AntAvatarStyle = {
  marginRight: "0.5rem"
};

export default class Avatar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: null
    }
  }

  // componentDidMount = async () => {
  //   const user = await 
  // }

  render() {
    console.log(this.props);
    const { style } = this.props;
    const { nickname, avatarURL } = this.props.user;
    return (
      avatarURL ? (
        <AvatarContainer>
          {(style === "photoOnly" || style === "both" || style === undefined) && (
            <AntAvatar style={AntAvatarStyle} src={avatarURL} />
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
        )
    )
  }
}
