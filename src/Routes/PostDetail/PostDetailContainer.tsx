import React from "react";
import { PostDetailPresenter } from "./PostDetailPresenter";
import { postApi } from "../../api";

interface IProps {
  match: {
    params: {
      postId: string;
    };
  };
}

interface IState {
  status: string;
  data: {
    no: number;
    title: string;
    videoId: string;
    author: string;
    content: string;
    datetime: string;
  } | null;
}

export default class PostDetailContainer extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: null,
      status: "failure"
    };
  }
  async componentDidMount() {
    console.log("didmount");
    try {
      const {
        match: {
          params: { postId }
        }
      } = this.props;
      const parsedId = parseInt(postId);
      const {
        data: { data, status }
      } = await postApi.postDetail(parsedId);
      console.log(data);
      this.setState({
        data,
        status
      });
    } catch (error) {
      alert(error);
    } finally {
    }
  }

  render() {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    const { data, status } = this.state;
    return (
      data &&
      status == "success" && (
        <PostDetailPresenter data={data} id={parseInt(postId)} />
      )
    );
  }
}
