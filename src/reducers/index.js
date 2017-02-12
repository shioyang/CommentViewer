import { combineReducers } from 'redux';
import comments from './comments';
import selected from './selected';

const cvApp = combineReducers({
  comments,
  selected
});

export default cvApp;