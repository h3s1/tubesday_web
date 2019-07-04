import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { ISimplePost } from "../../shared-interfaces";
import { PostCard } from "../../Components/PostCard";
import styled from "styled-components";

const { Content } = Layout;

const CustomMenu = styled(Menu)`
  line-height: 4rem;
  color: #a9a8a7;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface IProps {
  onClickMenuChange: (menu: "recent" | "hot") => void;
  menu: "recent" | "hot";
  articles: ISimplePost[];
}

const PostListContainer = styled.div`
  padding: 0.5rem;
  min-height: 20rem;
`;

export const PostListPresenter: React.SFC<IProps> = ({
  onClickMenuChange,
  menu,
  articles
}) => (
  <Content style={{ padding: "0" }}>
    <CustomMenu mode="horizontal" selectedKeys={[menu]} style={{}}>
      <Menu.Item
        key="recent"
        onClick={() => onClickMenuChange("recent")}
        style={{ gridColumn: "1/2", textAlign: "center" }}
      >
        🆕최신 게시물
      </Menu.Item>
      <Menu.Item
        key="hot"
        onClick={() => onClickMenuChange("hot")}
        style={{ gridColumn: "2/3", textAlign: "center" }}
      >
        🔥HOT 게시물
      </Menu.Item>
    </CustomMenu>
    <PostListContainer>
      {articles.map((article: ISimplePost) => (
        <Link key={article.id} to={`/posts/${article.id}/`}>
          <PostCard article={article} />
        </Link>
      ))}
    </PostListContainer>
  </Content>
);
