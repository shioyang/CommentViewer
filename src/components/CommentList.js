import React, { PropTypes } from 'react';
import './CommentList.css';
import Comment from './Comment';

const CommentList = ({ comments, selected, onCommentClick }) => (
  <div className="commentList">
    <table>
      <tbody>
        <tr>
          <th>Published At</th><th>Like Count</th><th>Text Display</th>
        </tr>
        { comments.map(comment =>
            <Comment
              key={comment.id}
              {...comment}
              onClick={() => onCommentClick(comment.id)} />
        )}
      </tbody>
    </table>
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