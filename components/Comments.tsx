import * as React from 'react';
import styled from 'styled-components';
import { UserComment, UserReaction } from '../types';
import Reaction from './Reaction';
import Comment from './Comment';


const CommentsContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  padding: 20px 20px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  font-size: 18px;
  color: lightslategray;
  background-color: white;
`;


interface CommentsProps {
  reactions: UserReaction[]
  comments: UserComment[]
  expiration: number
}

interface CommentsState {
  currentReactionItemIdx: number
  currentCommentItemIdx: number
  userReaction: boolean
}

class Comments extends React.Component<CommentsProps, {}> {
  state = {
    currentReactionItemIdx: 0,
    currentCommentItemIdx: 0,
    userReaction: true
  }

  componentDidMount() {
    setInterval(this.setCommentIndex, 5000)
  }

  setCommentIndex = (): void => {
    if (this.state.userReaction) {
      this.setState({
        currentReactionItemIdx: this.state.currentReactionItemIdx + 1,
        userReaction: false
      })
    }
    else {
      this.setState({
        currentCommentItemIdx: this.state.currentCommentItemIdx + 1,
        userReaction: true
      })
    }
  }

  render() {
    return (
      <CommentsContainer>
        { 
          this.props.reactions.length ? 
            this.state.userReaction ?
              <Reaction reaction={this.props.reactions[this.state.currentReactionItemIdx % this.props.reactions.length ]}/> : 
              <Comment comment={this.props.comments[this.state.currentCommentItemIdx % this.props.comments.length]} /> : 
            null 
        }
      </CommentsContainer>
    )
  }
}

export default Comments;
