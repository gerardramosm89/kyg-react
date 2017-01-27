import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const CREATE_REVIEW_POST = 'CREATE_REVIEW_POST';
const ROOT_URL = 'https://idealistinvestment.com/api/blogs';
const REVIEW_URL = 'https://idealistinvestment.com/api/reviews';

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(props){
	console.log('Create post was called');
	const request = axios.post(`${ROOT_URL}`, props);
	return {
		type: CREATE_POST,
		payload: request
	}
}

export function createReviewPost(props){
  console.log('Create post was called');
  const request = axios.post(`${REVIEW_URL}`, props);
  return {
    type: CREATE_REVIEW_POST,
    payload: request
  }
}
