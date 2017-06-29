import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const reducer = combineReducers({
  posts: PostsReducer,
});

export default reducer;
