import * as React from 'react';
import styled from 'styled-components';
import { MessageObject } from '../types';

const MessageContainer = styled.div`
  display: 'grid';
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  border-radius: 10px;
`;

const MessageBody = styled.h3`
  color: #454545;
  padding: 0;
  margin: 0;
  font-size: 24px;
`;

interface MessageProps {
  message: MessageObject
}

class Message extends React.Component<MessageProps, {}> {

  render() {
    return (
      <MessageContainer>
        <MessageBody>This is my message</MessageBody>
      </MessageContainer>
    )
  }
}

export default Message;
