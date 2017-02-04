import React, { PropTypes } from 'react';

const Comment = ({ id, snippet }) => (
  <tr>
    <td>{snippet.topLevelComment.snippet.publishedAt}</td>
    <td>{snippet.topLevelComment.snippet.likeCount}</td>
    <td>{snippet.topLevelComment.snippet.textDisplay}</td>
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
  })
};

export default Comment;