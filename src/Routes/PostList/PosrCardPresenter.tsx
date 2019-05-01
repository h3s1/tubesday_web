import React from "react";
import "antd/dist/antd.css";

interface IProps {}

interface IState {}

export default class PostCardPresenter extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <img
          src={"https://i.ytimg.com/vi/v7qisJ_KuYI/default.jpg"}
          style={{ width: "100%", backgroundColor: "black" }}
        />
        <div
          style={{
            display: "absolute",
            backgroundColor: "black",
            width: "100%"
          }}
        >
          <h3 style={{ position: "absolute", zIndex: 1, color: "white" }}>
            러블리즈(Lovelyz) &quot;Ah-Choo&quot; Official MV
          </h3>
        </div>
      </div>
    );
  }
}
