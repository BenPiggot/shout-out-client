import * as React from 'react';
import styled from 'styled-components';
import * as ReactTransitionGroup from 'react-transition-group';
import { UserReaction } from '../types';

const ReactionText = styled.div`
  font-weight: 100;
  font-size: 18px;
  padding: 0px 10px;
  &.reaction-appear {
    opacity: 0;
  }

  &.reaction-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

interface ReactionProps {
  reaction: UserReaction
}

class Reaction extends React.Component<ReactionProps, {}> {
  render() {
    return (
      <ReactTransitionGroup.CSSTransition
        classNames={'reaction'}
        timeout={300}
      >
        <ReactionText>
          {this.props.reaction.type} - {this.props.reaction.user}
        </ReactionText>
      </ReactTransitionGroup.CSSTransition>
    )
  }
}

export default Reaction;
