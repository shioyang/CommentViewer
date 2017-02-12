import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { selectComment } from '../actions/index';

const mapStateToProps = (state) => ({
  comments: state.comments,
  selected: state.selected
});

const mapDispatchToProps = ({
  onCommentClick: selectComment
});

const VisibleCommentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);

export default VisibleCommentList;