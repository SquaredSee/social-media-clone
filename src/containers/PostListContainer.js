import { connect } from 'react-redux';
import { getPosts, getPostsSuccess, getPostsFailure } from '../actions/posts';
import PostList from '../components/PostList';


const mapStateToProps = (state) => {
  return {
    testData: state.posts.testData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPosts()).then((response) => {
        !response.error
        ? dispatch(getPostsSuccess(response.payload.data))
        : dispatch(getPostsFailure(response.payload.data));
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
