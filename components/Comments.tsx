import * as React from 'react';
import styled from 'styled-components';

const CommentsContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  font-size: 18px;
  color; #454545;
`;

class Comments extends React.Component<{}> {
  render() {
    return (
      <CommentsContainer>
        <div>A comment</div>
      </CommentsContainer>
    )
  }
}

export default Comments;
