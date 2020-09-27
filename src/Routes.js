import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  addTitleAction,
  updateTitleAction,
  removeTitleAction,
  addCommentAction,
  removeCommentAction,
  getTitlesFromAPI,
  AddPostToAPI,
  updatePostToAPI,
  deletePostFromAPI,
  AddCommentToAPI,
  deleteCommentFromAPI,
  voteToAPI,
  voteToAPITitles,
} from './actions/actions';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddPost from './AddPost';
import UpdatePost from './UpdatePost';
import PostPage from './PostPage';

const Routes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTitlesFromAPI());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts, shallowEqual);
  const titles = useSelector((state) => state.titles, shallowEqual);

  const addPost = (post) => {
    dispatch(AddPostToAPI(post));
  };

  const addTitle = (title) => {
    dispatch(addTitleAction(title));
  };

  const updatePost = (id, data) => {
    dispatch(updatePostToAPI(id, data));
  };
  const updateTitle = (titles) => {
    dispatch(updateTitleAction(titles));
  };

  const deletePost = (id) => {
    dispatch(deletePostFromAPI(id));
    dispatch(removeTitleAction(id));
  };

  const addComment = (comment, id) => {
    dispatch(AddCommentToAPI(comment, id));
  };

  const deleteComment = (id, comment) => {
    dispatch(deleteCommentFromAPI(id, comment));
  };

  const votePost = (id, direction) => {
    dispatch(voteToAPI(id, direction));
  };

  const voteTitle = (id, direction) => {
    dispatch(voteToAPITitles(id, direction));
  };

  return (
    <Switch>
      <Route exact path='/'>
        <HomePage titles={titles} voteTitle={voteTitle} />
      </Route>
      <Route exact path='/new'>
        <AddPost addPost={addPost} addTitle={addTitle} />
      </Route>
      <Route exact path='/posts/:id'>
        <PostPage
          posts={posts}
          deletePost={deletePost}
          addComment={addComment}
          deleteComment={deleteComment}
          votePost={votePost}
        />
      </Route>
      <Route exact path='/posts/:id/update'>
        <UpdatePost
          posts={posts}
          titles={titles}
          updatePost={updatePost}
          updateTitle={updateTitle}
        />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
