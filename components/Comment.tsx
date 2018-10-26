import * as React from 'react';
import styled from 'styled-components';
import * as ReactTransitionGroup from 'react-transition-group';
import { UserComment } from '../types';

const CommentText = styled.div`
  font-weight: 100;
  font-size: 18px;
  padding: 0px 10px;
  &.comment-appear {
    opacity: 0;
  }

  &.comment-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

interface CommentProps {
  comment: UserComment
}

class Comment extends React.Component<CommentProps, {}> {
  render() {
    return (
      <ReactTransitionGroup.CSSTransition
        classNames={'comment'}
        timeout={300}
      >
        <CommentText>
          {this.props.comment.message} - {this.props.comment.user}
        </CommentText>
      </ReactTransitionGroup.CSSTransition>
    )
  }
}

export default Comment;
