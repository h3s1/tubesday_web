import React from "react";
// import { Avatar as AntAvatar } from "antd";
import { IAvatar } from "../shared-interfaces";
// import styled from "styled-components";

interface Props {
  user_id: number;
  style?: "photoOnly" | "nicknameOnly" | "both";
}

interface State {
  user: IAvatar | null;
}

// const AvatarContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const AntAvatarStyle = {
//   marginRight: "0.5rem"
// };

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
    // const { style } = this.props;
    const { user_id } = this.props;
    return (
      <div>{user_id}</div>
      // profileImage ? (
      //   <AvatarContainer>
      //     {(style === "photoOnly" || style === "both" || style === undefined) && (
      //       <AntAvatar style={AntAvatarStyle} src={profileImage} />
      //     )}
      //     {(style === "nicknameOnly" || style === "both" || style === undefined) &&
      //       nickname}
      //   </AvatarContainer>
      // ) : (
      //     <AvatarContainer>
      //       {(style === "photoOnly" || style === "both" || style === undefined) && (
      //         <AntAvatar style={AntAvatarStyle} icon="user">
      //           {nickname}
      //         </AntAvatar>
      //       )}
      //       {(style === "nicknameOnly" || style === "both" || style === undefined) &&
      //         nickname}
      //     </AvatarContainer>
      //   )
    )
  }       
}
