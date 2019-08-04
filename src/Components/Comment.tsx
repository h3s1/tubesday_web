import React from "react"
import styled from 'styled-components';
import Avatar from "../Components/Avatar";
import { IComment } from '../shared-interfaces';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 2rem 1rem 1rem;
  border-top: 0.5px solid rgba(0, 0, 0, 0.3);
`;
const CommentContentContainer = styled.div`
    font-size: 0.8rem;
`
const CommentUser = styled.div`
    font-weight: 700;
    color: grey;
    margin-bottom: 0.5rem;
`
const CommentContent = styled.div`
  line-height: 1.5;
`;

interface Props {
    comment: IComment
}

interface State {

}

export default class Comment extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { comment } = this.props;
        return (
            <Container>
                <Avatar style={"photoOnly"} user={comment.user} />
                <CommentContentContainer>
                    <CommentUser>{comment.user.nickname}</CommentUser>
                    <CommentContent>{comment.content}</CommentContent>
                </CommentContentContainer>
            </Container>
        )
    }
}