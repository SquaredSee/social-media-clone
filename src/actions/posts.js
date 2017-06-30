import axios from 'axios';

export function getAllPosts() {
  const request = axios({
    method: 'get',
    url: '/api',
    headers: [],
  });

  return {
    type: 'GET_ALL_POSTS',
    payload: request,
  };
}

export function getAllPostsSuccess(posts) {
  return {
    type: 'GET_ALL_POSTS_SUCCESS',
    payload: posts,
  };
}

export function getAllPostsFailure(error) {
  return {
    type: 'GET_ALL_POSTS_FAILURE',
    payload: error,
  };
}
