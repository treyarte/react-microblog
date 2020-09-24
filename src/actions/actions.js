import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_TITLE,
  UPDATE_TITLE,
  REMOVE_TITLE,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './actionTypes';

const addPostAction = (post) => ({ type: ADD_POST, post });

const updatePostAction = (posts) => ({ type: UPDATE_POST, posts });

const removePostAction = (id) => ({ type: REMOVE_POST, id });

const addTitleAction = (title) => ({ type: ADD_TITLE, title });

const updateTitleAction = (titles) => ({ type: UPDATE_TITLE, titles });

const removeTitleAction = (id) => ({ type: REMOVE_TITLE, id });

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
};
