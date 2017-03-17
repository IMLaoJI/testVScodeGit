import React from 'react';
import Comment from './Comment'

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }
  static defaultProps = {
    comments: []
  }

  render() {
    
    return  (
          <div>
            {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default CommentList;
