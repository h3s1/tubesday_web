import React from "react";
import { Layout, Input, Menu } from "antd";
import { Link } from "react-router-dom";
import { IPostSimple } from "../../shared-interfaces";
import { PostCard } from "../../Components/PostCard";
import styled from "styled-components";

const { Header, Content } = Layout;
const Search = Input.Search;

interface IProps {
  posts: IPostSimple[];
}

const PostListContainer = styled.div`
  padding: 0.5rem;
  min-height: 20rem;
`;

export const PostListPresenter: React.SFC<IProps> = ({ posts }) => (
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
      <PostListContainer>
        {posts.map((post: IPostSimple) => (
          <Link key={post.no} to={`/posts/${post.no}/`}>
            <PostCard post={post} />
          </Link>
        ))}
      </PostListContainer>
    </Content>
  </Layout>
);
