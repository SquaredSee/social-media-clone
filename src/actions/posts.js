import axios from 'axios';

export function getAllPosts() {
  const request = axios({
    method: 'get',
    url: '/api/posts',
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

export function resetAllPosts() {
  return { type: 'RESET_ALL_POSTS' };
}
