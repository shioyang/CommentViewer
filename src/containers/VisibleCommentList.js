import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { selectComment } from '../actions/index';

const mapStateToProps = (state) => ({
  comments: state.items
});

const mapDispatchToProps = ({
  onCommentClick: selectComment
});

const VisibleCommentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);

export default VisibleCommentList;