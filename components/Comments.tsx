import * as React from 'react';
import styled from 'styled-components';
import { UserComment, UserReaction } from '../types';

const CommentsContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  padding: 20px 30px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  font-size: 18px;
  color: lightslategray;
  background-color: white;
`;

const Comment = styled.div`
  font-weight: 100;
  font-size: 18px;
  padding-top: 10px;
  padding-botttom: 10px;
  border-bottom: 1px solid #efefef;
`;

interface CommentsProps {
  reactions: UserReaction[]
  comments: UserComment[]
  expiration: number
}

class Comments extends React.Component<CommentsProps, {}> {
  render() {
    return (
      <CommentsContainer>
        {this.props.reactions.map(reaction => {
          return (
            <Comment>{reaction.type}</Comment>
          )
        })}
        {this.props.comments.map(comment => {
          return (
            <Comment>{comment.message}</Comment>
          )
        })}
      </CommentsContainer>
    )
  }
}

export default Comments;
