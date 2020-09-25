import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  addPostAction,
  updatePostAction,
  removePostAction,
  addTitleAction,
  updateTitleAction,
  removeTitleAction,
  addCommentAction,
  removeCommentAction,
  getTitlesFromAPI,
  startLoad,
  AddPostToAPI,
  updatePostToAPI,
  deletePostFromAPI,
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

  const addComment = (id, comment) => {
    dispatch(addCommentAction(id, comment));
  };

  const deleteComment = (id, comment) => {
    dispatch(removeCommentAction(id, comment));
  };

  return (
    <Switch>
      <Route exact path='/'>
        <HomePage titles={titles} />
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
