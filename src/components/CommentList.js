import React, { PropTypes } from 'react';
import './CommentList.css';
import Comment from './Comment';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

const CommentList = ({ comments, selected, onCommentClick }) => (
  <div className="commentList">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Published At</TableHeaderColumn>
          <TableHeaderColumn>Like Count</TableHeaderColumn>
          <TableHeaderColumn>Text Display</TableHeaderColumn>
          <TableHeaderColumn>Action</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        { comments.map(comment =>
            <Comment
              key={comment.id}
              {...comment}
              onClick={() => onCommentClick(comment.id)} />
        )}
      </TableBody>
    </Table>
    <div className="selected">
      <label>Selected:</label>
      <span>{selected}</span>
    </div>
  </div>
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
  })),
  selected: PropTypes.string,
  onCommentClick: PropTypes.func.isRequired
};

export default CommentList;