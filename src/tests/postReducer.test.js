import postReducer from '../reducers/postReducer';
import { ADD_POST, REMOVE_POST, UPDATE_POST } from '../actions/actionTypes';

describe('Post reducer', () => {
  const INITIAL_STATE = {
    posts: {
      1: {
        title: 'First Post',
        description: 'Best post ever!',
        body: 'Everyone loves posting first. I win!',
        votes: 0,
        comments: [
          {
            id: 1,
            text: 'This is a really great post.',
          },
          {
            id: 2,
            text: 'I learned so much reading this.',
          },
        ],
      },
      2: {
        title: 'Second Post',
        description: 'A very good post!',
        body: "Oh well. Didn't get to be first.",
        votes: 0,
        comments: [],
      },
    },
  };

  it('Should return the initial state', () => {
    expect(postReducer(undefined, {})).toEqual({
      posts: {},
    });
  });

  it('should return a state with a new post in it', () => {
    const id = 1;
    const newPost = {
      [id]: {
        title: 'First Post',
        description: 'Best post ever!',
        body: 'Everyone loves posting first. I win!',
        votes: 0,
        comments: [],
      },
    };
    expect(
      postReducer(undefined, {
        type: ADD_POST,
        post: newPost,
      })
    ).toEqual({ posts: newPost });
  });

  it('should return a state with multiple posts and a new post', () => {
    const newPost = {
      4: {
        title: 'new Post',
        description: 'A new test post!',
        body: 'My test post!',
        votes: 0,
        comments: [],
      },
    };
    expect(
      postReducer(INITIAL_STATE, { type: ADD_POST, post: newPost })
    ).toEqual({
      posts: {
        ...INITIAL_STATE.posts,
        ...newPost,
      },
    });
  });

  it('should remove a post and return the state', () => {
    const id = 2;

    expect(postReducer(INITIAL_STATE, { type: REMOVE_POST, id })).toEqual({
      posts: { 1: INITIAL_STATE.posts[1] },
    });
  });

  it('should update a post and return the state', () => {
    const posts = INITIAL_STATE.posts;
    const updatedPosts = {
      title: 'Updated Post',
      description: 'A That has been updated!',
      body: "Oh well. Didn't get to be first.",
      votes: 0,
      comments: [],
    };

    posts[2] = updatedPosts;
    expect(postReducer(INITIAL_STATE, { type: UPDATE_POST, posts })).toEqual({
      posts: {
        ...posts,
      },
    });
  });
});
