import React, { PropTypes } from 'react';

const Comment = ({ id, snippet }) => (
  <li>
    {snippet.topLevelComment.snippet.textDisplay}
  </li>
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