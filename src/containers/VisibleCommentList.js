import { connect } from 'react-redux';
import CommentList from '../components/CommentList';

const mapStateToProps = (state) => ({
  comments: state.comments
});

const mapDispatchToProps = ({
//   onCommentClick: action?
});

const VisibleCommentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);

export default VisibleCommentList;