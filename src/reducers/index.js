import { combineReducers } from 'redux';
import PostsReducer from './posts';

const reducer = combineReducers({
  posts: PostsReducer,
});

export default reducer;
