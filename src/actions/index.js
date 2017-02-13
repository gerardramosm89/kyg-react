import axios from 'axios';
import { CHANGE_AUTH } from './types';

//Blog Actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_BLOGPOST = 'UPDATE_BLOGPOST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_BLOGPOST = 'DELETE_BLOGPOST';
//Review Actions
export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const CREATE_REVIEW_POST = 'CREATE_REVIEW_POST';
export const UPDATE_REVIEWPOST = 'UPDATE_REVIEWPOST';
//Github Actions
export const FETCH_GITHUBUSER = 'FETCH_GITHUBUSER';
export const CLEAR_GITHUBUSER = 'CLEAR_GITHUBUSER';



const ROOT_URL = 'https://idealistinvestment.com/api/blogs';
const REVIEW_URL = 'https://idealistinvestment.com/api/reviews';
const GITHUB_URL = 'https://api.github.com/users';
const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7ImVtYWlsIjoicmVxdWlyZSIsInBhc3N3b3JkIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJ1c2VybmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6eyJlbWFpbCI6dHJ1ZX19LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMDUkTi5XMnVHaVRKRFZjSWN1aGZLaHZJLjdpaW5wQkhRZGhGS3dTbGJaM0hxcjFETjhGdm5sVEciLCJ1c2VybmFtZSI6ImFkbWluMSIsIl9pZCI6IjU4OWNiZmJjZjM1YzQ3N2E4NWRlOTNlNSJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsLG51bGxdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W251bGxdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltudWxsXX0sIl9wb3N0cyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltdfSwiaWF0IjoxNDg3MDA3NzAyLCJleHAiOjE0ODcwMDkxNDJ9.0nBcG6yjH7_HSGtkaeejIvwkL45HL5-06tGlgzTSHBI';

const headerConfig = {
	headers: {'x-access-token': JWT_TOKEN}
};

export function authenticate(isLoggedIn){
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	};
}

export function deleteBlog(title){
	//const request = axios.delete(`${REVIEW_URL}/${title}`, headerConfig);
	console.log(`${title} was attempted to be deleted, action was called`);
	return {
		type: DELETE_BLOGPOST,
		payload: {}
	};
}
export function updateReviewPost(title){
	const request = axios.put(`${REVIEW_URL}/${title}`);
	return {
		type: UPDATE_REVIEWPOST,
		payload: request
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
