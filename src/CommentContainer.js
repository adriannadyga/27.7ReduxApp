import {connect} from 'react-redux';
import Comment from './Comment';
import {addComment} from './action';
import {removeComment} from './action';
import {thumbUpComment} from './action';
import {thumbDownComment} from './action';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);