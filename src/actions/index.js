import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
//Blog Actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_BLOGPOST = 'UPDATE_BLOGPOST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_BLOGPOST = 'DELETE_BLOGPOST';
//Review Actions
export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const FETCH_REVIEW = 'FETCH_REVIEW';
export const CREATE_REVIEW_POST = 'CREATE_REVIEW_POST';
export const UPDATE_REVIEWPOST = 'UPDATE_REVIEWPOST';
export const DELETE_REVIEWPOST = 'DELETE_REVIEWPOST';
//Github Actions
export const FETCH_GITHUBUSER = 'FETCH_GITHUBUSER';
export const CLEAR_GITHUBUSER = 'CLEAR_GITHUBUSER';



const ROOT_URL = 'https://idealistinvestment.com/api/blogs';
const REVIEW_URL = 'https://idealistinvestment.com/api/reviews';
const GITHUB_URL = 'https://api.github.com/users';
const API_URL = 'http://localhost:8080'
const JWT_TOKEN = '';

const headerConfig = {
	headers: {'x-access-token': JWT_TOKEN}
};



// Actions for sign in
export function signinUser({ email, password }) {
	console.log(`action was called, ${email} ${password}`);
	return function(dispatch) {
		axios.post(`${API_URL}/api/signin`, { email, password })
			.then(response => {
				console.log("response from sign in: ", response);
				dispatch({ type: AUTH_USER });

				localStorage.setItem('token', response.data.token);
				// Update state to indicate user is authenticated
				browserHistory.push('/feature');
			})
			.catch(() => {
				dispatch(authError('Bad Login Info'));
			});
	}
}
// Sign up user
export function signupUser({ email, password }) {
	//console.log(`sign up action was called, ${email} ${password}`);
	return function(dispatch) {
		axios.post(`${API_URL}/api/signup`, { email, password })
			.then(response => {
				console.log("response from successful sign up is: ", response) // this shows as proper object!!
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/feature');
			})
			.catch(response => {
				console.log(response);
				dispatch(authError("sign up failed"));
			});
	}
}

export function authError(error) {
	console.log("Auth error fired");
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function signoutUser() {
	localStorage.removeItem('token');

	return { type: UNAUTH_USER }
}

export function authenticate(isLoggedIn){
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	};
}
export function fetchMessage(){
	return function(dispatch) {
		axios.get(`${API_URL}/api`, {headers: {authorization: localStorage.getItem('token' )}})
			.then(response => {
				console.log(response);
			});
	};
}

export function fetchReview(title){
	const request = axios.get(`${REVIEW_URL}/${title}`);
	console.log(`Fetch review was called`);
	return {
		type: FETCH_REVIEW,
		payload: request
	};
}
export function deleteReview(title){
	const request = axios.delete(`${REVIEW_URL}/${title}`, headerConfig);
	console.log(`${title} deleteReview action was called!`);
	return {
		type: DELETE_REVIEWPOST,
		payload: {}
	};
}
export function deleteBlog(title){
	const request = axios.delete(`${ROOT_URL}/${title}`, headerConfig);
	console.log(`${title} was attempted to be deleted, action was called`);
	return {
		type: DELETE_REVIEWPOST,
		payload: {}
	};
}
export function updateReviewPost(title, body){
	console.log(`The title is: ${title}`);
	//body = JSON.stringify(body);
	console.log(`The body is: ${body}`);
	const request = axios.put(`${REVIEW_URL}/${title}`, body, headerConfig);
	return {
		type: UPDATE_REVIEWPOST,
		payload: {}
	}
}

export function fetchReviewPosts(){
	const request = axios.get(`${REVIEW_URL}`);
	return {
		type: FETCH_REVIEWS,
		payload: request
	}
}

export function clearGithubRepos(){
	const Repos = {};
	return {
		type: CLEAR_GITHUBUSER,
		payload: Repos
	};
}
export function fetchGithubRepos(user){
	const request = axios.get(`${GITHUB_URL}/${user}/repos`);
	return {
		type: FETCH_GITHUBUSER,
		payload: request
	};
}
export function fetchPost(title){
	const request = axios.get(`${ROOT_URL}/${title}`);
	return {
		type: FETCH_POST,
		payload: request
	};
}
export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(props){
	console.log('Create post was called');
	const request = axios.post(`${ROOT_URL}`, props, headerConfig);
	return {
		type: CREATE_POST,
		payload: request
	}
}

export function createReviewPost(props){
  console.log('Create post was called');
  const request = axios.post(`${REVIEW_URL}`, props, headerConfig);
  return {
    type: CREATE_REVIEW_POST,
    payload: request
  }
}
