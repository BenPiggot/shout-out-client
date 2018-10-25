import * as React from 'react';
import styled from 'styled-components';
import { MessageObject } from '../types';
import * as CSSTransitionGroup from 'react-transition-group';

const MessageContainer = styled.div`
  display: 'grid';
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  background-color: white;
  &.message-appear {
    opacity: 0;
  }

  &.message-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

const MessageBody = styled.h3`
  color: lightslategray;
  padding: 0;
  margin: 0;
  font-size: 24px;
`;

interface MessageProps {
  message: MessageObject
}

class Message extends React.Component<MessageProps, {}> {
  componentDidUpdate() {
    console.log('component updated')
  }
  render() {
    return (
      <CSSTransitionGroup.TransitionGroup
        transitionName={'message'}
        transitionAppear={true}
        transitionAppearTimeout={500}
      >
        <MessageContainer>
          <MessageBody>{this.props.message.message}</MessageBody>
        </MessageContainer>
      </CSSTransitionGroup.TransitionGroup >
      
    )
  }
}

export default Message;
