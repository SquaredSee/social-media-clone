const INITIAL_STATE = {
  testData: { foo: '', error: null, loading: false },
  // postsList: { posts: [], error: null, loading: false },
  // newPost: { post: null, error: null, loading: false },
  // activePost: { post: null, error: null, loading: false },
  // deletedPost: { post: null, error: null, loading: false },
};

export default function (state = INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case 'GET_ALL_POSTS': {
      return { ...state, testData: { foo: '', error: null, loading: true } };
    }
    case 'GET_ALL_POSTS_SUCCESS': {
      return { ...state, testData: { foo: action.payload.message, error: null, loading: false } };
    }
    case 'GET_ALL_POSTS_FAILURE': {
      const error = action.payload || { message: action.payload.message };
      return { ...state, testData: { foo: '', error: error.message, loading: false } };
    }
    case 'RESET_ALL_POSTS': {
      return { ...state, testData: { foo: '', error: null, loading: false } };
    }
    default: {
      return state;
    }
  }
}
