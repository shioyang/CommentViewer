import React, { PropTypes } from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <ul>
    { comments.map(comment =>
        <Comment key={comment.id} {...comment} />
    )}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    snippet: PropTypes.shape({
      topLevelComment: PropTypes.shape({
        snippet: PropTypes.shape({
          textDisplay: PropTypes.string.isRequired
        })
      })
    })
  }))
};

export default CommentList;