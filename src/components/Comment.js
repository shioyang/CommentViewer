import React, { PropTypes } from 'react';
import './Comment.css';
import RaisedButton from 'material-ui/RaisedButton';

const Comment = ({ id, snippet, onClick }) => (
  <tr className="comment">
    <td>{snippet.topLevelComment.snippet.publishedAt}</td>
    <td>{snippet.topLevelComment.snippet.likeCount}</td>
    <td>{snippet.topLevelComment.snippet.textDisplay}</td>
    <td><RaisedButton onClick={onClick}>Click</RaisedButton></td>
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
  onClick: PropTypes.func.isRequired
};

export default Comment;