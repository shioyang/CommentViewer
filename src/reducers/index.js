import { combineReducers } from 'redux';
import comments from './comments';

const cvApp = combineReducers({
  comments
});

export default cvApp;