import * as React from 'react';
import styled from 'styled-components';
import { MessageObject } from '../types';
import * as ReactTransitionGroup from 'react-transition-group';
import { PulseLoader } from 'react-spinners';

const MessageContainer = styled.div`
  display: 'grid';
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  font-size: 30px;
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
  font-size: 30px;
  display: grid;
`;

const LoadingState = styled.div`
  margin-top: 10px;
  color: ghostwhite;
  display: grid;
  justify-items: center;
  align-items:
  h3 {
    color: ghostwhite;
  }
`

interface MessageProps {
  message: MessageObject
}

class Message extends React.Component<MessageProps, {}> {
  render() {
    return (
      <ReactTransitionGroup.CSSTransition
        classNames={'message'}
        timeout={300}
      >
        <MessageContainer>
          {
            this.props.message.message ? 
              <MessageBody>
                  { this.props.message.message }
              </MessageBody> :
              <LoadingState>
                <PulseLoader
                  size={30}
                  color={'lightslategrey'}
                />
              </LoadingState>
          }
        </MessageContainer>
      </ReactTransitionGroup.CSSTransition >
    )
  }
}

export default Message;
