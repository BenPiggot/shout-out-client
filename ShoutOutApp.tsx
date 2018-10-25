import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Message from './components/Message';
import Comments from './components/Comments';

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
    font-family: 'radnika_next'
  }
  a {
    text-decoration: none;
  }
`

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-column-gap: 2%;
  margin: 2% 5%;
`;

interface ShoutOutAppState {
  message: {}
}

class ShoutOutApp extends React.Component<{},{}> {
  state = {
    message: Message
  }
  render() {
    return (
      <div>
        <Header />
        <AppContainer>
          <Message message={{title: 'this is my message'}}/>
          <Comments />
        </AppContainer>
        <GlobalStyle />
      </div>
    )
  }
}

export default ShoutOutApp;
