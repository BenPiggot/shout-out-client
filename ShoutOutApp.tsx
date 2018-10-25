import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Message from './components/Message';
import Comments from './components/Comments';
import { MessageObject } from './types';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-size:normal;
  }
  html {
    box-sizing: border-box;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto';
    background-color: ghostwhite;
  }
  a {
    text-decoration: none;
  }
`

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 2%;
  margin: 2% 5%;
`;

interface ShoutOutAppState {
  message: MessageObject
}

const message = {
  "message": "@BenPiggot did something awesome",
  "reactions": [
    {
      "user": "jrosen",
      "type": "thumbsup"
    },
    {
      "user": "dpohl",
      "type": "grinning"
    }
  ],
  "comments": [
    {
      "user": "jrosen",
      "message": "Way to go!!"
    }
  ],
  "type": 'general',
  "source": 'slack',
  "recipient": [],
  "expiration": 60000
}

class ShoutOutApp extends React.Component<{}, ShoutOutAppState> {
  state: ShoutOutAppState = {
    message: {
      "message": "",
      "reactions": [],
      "comments": [],
      "type": '',
      "source": '',
      "recipient": [],
      "expiration": 60000
    }
  }

  componentDidMount() {
    this.getLatestMessage();
    setInterval(this.getLatestMessage, 5000);
  }

  getLatestMessage = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      this.setState({
        message
      })
    })
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <Header />
        <AppContainer>
          <Message message={message} />
          <Comments 
            reactions={message.reactions} 
            comments={message.comments} 
            expiration={message.expiration}
          />
        </AppContainer>
        <GlobalStyle />
      </div>
    )
  }
}

export default ShoutOutApp;
