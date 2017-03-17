import React from 'react';

class Comment extends React.Component {
    constructor() {
        super();
        this.state = { someKey: 'someValue' };
    }

 render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }

    componentDidMount() {
        this.setState({ someKey: 'otherValue' });
    }
}

export default Comment;