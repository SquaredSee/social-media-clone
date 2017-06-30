import { connect } from 'react-redux';
import { getAllPosts, getAllPostsSuccess, getAllPostsFailure } from '../actions/posts';
import PostList from '../components/PostList';


const mapStateToProps = (state) => {
  return {
    postList: state.posts.postList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getAllPosts()).then((response) => {
        !response.error
        ? dispatch(getAllPostsSuccess(response.payload.data))
        : dispatch(getAllPostsFailure(response.payload));
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
