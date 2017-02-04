import React, { PropTypes } from 'react';
import './CommentList.css';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <table className="commentList">
    <tr>
      <th>Published At</th><th>Like Count</th><th>Text Display</th>
    </tr>
    { comments.map(comment =>
        <Comment key={comment.id} {...comment} />
    )}
  </table>
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