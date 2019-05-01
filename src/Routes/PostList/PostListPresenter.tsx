import React from "react";
import "antd/dist/antd.css";
import { Layout, Input, Menu } from "antd";
import PostCardPresenter from "./PosrCardPresenter";

const { Header, Content } = Layout;
const Search = Input.Search;

const list: Array<Object> = [
  {
    no: 1,
    title: "대망의 첫번째 글임",
    videoId: "cG7FkoNKBzI",
    author: "카드값줘최리",
    content: "<p>이달의 소녀 파이팅~~~ ^ㅇ^</p>",
    datetime: "2019-04-05 13:00:00"
  },
  {
    no: 2,
    title: "이건 두번째 글임",
    videoId: "v7qisJ_KuYI",
    author: "슈퍼스타케이",
    content: "<p>아츄</p>",
    datetime: "2019-04-05 13:13:25"
  },
  {
    no: 3,
    title: "아이돌 글 좀 그만 올려라 십덕새기들아",
    videoId: "_XulUbBra5M",
    author: "스피드웨건",
    content: "<p>좀 유익한 영상들을 올리셈</p>",
    datetime: "2019-04-06 01:12:24"
  }
];

export const PostListPresenter: React.SFC<{}> = ({}) => (
  <Layout className="layout">
    <Header
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center"
      }}
    />
    <Content style={{ padding: "0" }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{
          lineHeight: "64px",
          color: "#A9A8A7",
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        }}
      >
        <Menu.Item key="new" style={{ gridColumn: "1/2", textAlign: "center" }}>
          🆕최신 게시물
        </Menu.Item>
        <Menu.Item key="hot" style={{ gridColumn: "2/3", textAlign: "center" }}>
          🔥HOT 게시물
        </Menu.Item>
      </Menu>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
        style={{ padding: "10px", backgroundColor: "white" }}
      />
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        {list.map(item => (
          <PostCardPresenter />
        ))}
      </div>
    </Content>
  </Layout>
);
