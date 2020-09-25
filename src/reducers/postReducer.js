import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_POST,
} from '../actions/actionTypes';
const INITIAL_STATE = {
  posts: {},
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { posts: { ...state.posts, ...action.post } };

    case ADD_POST:
      action.post.comments = [];
      return {
        posts: {
          ...state.posts,
          ...action.post,
        },
      };
    case REMOVE_POST: {
      const id = action.id;
      delete state.posts[id];
      return {
        posts: {
          ...state.posts,
        },
      };
    }
    case UPDATE_POST: {
      const posts = action.posts;
      return {
        posts,
      };
    }

    case ADD_COMMENT:
      const id = action.post_comment.post_id;
      const comment = action.post_comment.comment;
      const posts = state.posts;
      posts[id].comments = [...posts[id].comments, { ...comment }];

      return {
        posts,
      };

    case REMOVE_COMMENT: {
      const post_id = action.post_comment.post_id;
      console.log(post_id);
      const remove_comment = action.post_comment.comment;
      const posts = state.posts;

      posts[post_id].comments = [
        ...posts[post_id].comments.filter((c) => c.id !== remove_comment.id),
      ];

      return {
        posts,
      };
    }

    default:
      return state;
  }
};

export default postReducer;
