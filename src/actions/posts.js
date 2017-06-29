import axios from 'axios';

export function getPosts() {
  const request = axios({
    method: 'get',
    url: '/api',
    headers: [],
  });

  return {
    type: 'GET_POSTS',
    payload: request,
  };
}

export function getPostsSuccess(posts) {
  return {
    type: 'GET_POSTS_SUCCESS',
    payload: posts,
  };
}

export function getPostsFailure(error) {
  return {
    type: 'GET_POSTS_FAILURE',
    payload: error,
  };
}
