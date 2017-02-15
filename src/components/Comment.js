import React, { PropTypes } from 'react';
import './Comment.css';
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const Comment = ({ id, snippet, onClick }) => (
  <TableRow className="comment">
    <TableRowColumn>{snippet.topLevelComment.snippet.publishedAt}</TableRowColumn>
    <TableRowColumn>{snippet.topLevelComment.snippet.likeCount}</TableRowColumn>
    <TableRowColumn>{snippet.topLevelComment.snippet.textDisplay}</TableRowColumn>
    <TableRowColumn><RaisedButton onClick={onClick}>Click</RaisedButton></TableRowColumn>
  </TableRow>
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