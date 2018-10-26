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
  grid-row-gap: 2ch;
  margin: 2% 5%;
`;

interface ShoutOutAppState {
  message: MessageObject
}

const message = { // FOR TESTING PURPOSES
  "message": "@BenPiggot did something awesome...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
  }

  getLatestMessage = () => {
    // fetch('https://t9hb769qo7.execute-api.us-east-1.amazonaws.com/prod/shout/current')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      this.setState({
        message
      }, () => {
        setTimeout(this.getLatestMessage, this.state.message.expiration);
      })
    })
  }

  getTimeToExpiry = () => {
    let currentTime: number = (new Date()).getTime();
    return this.state.message.expiration - currentTime;
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
