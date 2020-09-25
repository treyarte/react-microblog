import axios from 'axios';
import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_TITLE,
  UPDATE_TITLE,
  REMOVE_TITLE,
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_TITLES,
  FETCH_POST,
} from './actionTypes';

import { IS_LOADING, NOT_LOADING } from './loadingTypes';

const BASE_URL = 'http://localhost:5000/api/';

const addPostAction = (post) => ({ type: ADD_POST, post });

const updatePostAction = (posts) => ({ type: UPDATE_POST, posts });

const removePostAction = (id) => ({ type: REMOVE_POST, id });

const addTitleAction = (title) => ({ type: ADD_TITLE, title });

const updateTitleAction = (titles) => ({ type: UPDATE_TITLE, titles });

const removeTitleAction = (id) => ({ type: REMOVE_TITLE, id });

const getTitlesFromAPI = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(BASE_URL + 'posts');
      const titlesObj = {};
      res.data.map((t) => (titlesObj[t.id] = { ...t }));
      dispatch(gotTitles(titlesObj));
    } catch (error) {
      console.log(error);
    }
  };
};

const getPostFromAPI = (id) => {
  return async function (dispatch) {
    try {
      let res = await axios.get(BASE_URL + `posts/${id}`);
      const post = res.data;
      dispatch(gotPost({ [post.id]: { ...post } }));
      dispatch(endLoad());
    } catch (error) {
      console.log(error);
    }
  };
};

const AddPostToAPI = (post) => {
  return async function (dispatch) {
    try {
      let res = await axios.post(BASE_URL + `posts`, post);
      const newPost = res.data;
      dispatch(addPostAction(newPost));
      dispatch(addTitleAction(newPost));
    } catch (error) {
      console.log(error);
    }
  };
};

const updatePostToAPI = (id, formData) => {
  return async function (dispatch) {
    try {
      let res = await axios.put(BASE_URL + `posts/${id}`, formData);
      const newPost = res.data;
      dispatch(updatePostAction(newPost));
    } catch (error) {
      console.log(error);
    }
  };
};

const deletePostFromAPI = (id) => {
  return async function (dispatch) {
    try {
      let res = await axios.delete(BASE_URL + `posts/${id}`);
      console.log(res.data);
      dispatch(removePostAction(id));
    } catch (error) {
      console.log(error);
    }
  };
};

const gotTitles = (titles) => ({ type: FETCH_TITLES, titles });
const gotPost = (post) => ({ type: FETCH_POST, post });

const startLoad = () => ({ type: IS_LOADING });
const endLoad = () => ({ type: NOT_LOADING });

const addCommentAction = (id, comment) => ({
  type: ADD_COMMENT,
  post_comment: {
    post_id: id,
    comment,
  },
});

const removeCommentAction = (id, comment) => ({
  type: REMOVE_COMMENT,
  post_comment: {
    post_id: id,
    comment,
  },
});

export {
  addPostAction,
  removePostAction,
  updatePostAction,
  addTitleAction,
  updateTitleAction,
  removeTitleAction,
  addCommentAction,
  removeCommentAction,
  getTitlesFromAPI,
  getPostFromAPI,
  AddPostToAPI,
  updatePostToAPI,
  deletePostFromAPI,
};
