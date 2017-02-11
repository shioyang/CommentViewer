import React, { PropTypes } from 'react';

const Comment = ({ id, snippet, onCommentClick }) => (
  <tr>
    <td>{snippet.topLevelComment.snippet.publishedAt}</td>
    <td>{snippet.topLevelComment.snippet.likeCount}</td>
    <td>{snippet.topLevelComment.snippet.textDisplay}</td>
    <td><button onClick="{onCommentClick}">Click</button></td>
  </tr>
);

Comment.PropTypes = {
  id: PropTypes.string.isRequired,
  snippet: PropTypes.shape({
    topLevelComment: PropTypes.shape({
      snippet: PropTypes.shape({
        textDisplay: PropTypes.string.isRequired
      })
    })
  }),
  onCommentClick: PropTypes.func.isRequired
};

export default Comment;