import React, { useState } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddPost from './AddPost';
import UpdatePost from './UpdatePost';
import Post from './Post';

const Routes = () => {
  const [posts, setPosts] = useState([]);
  const [titles, setTitles] = useState([]);

  const addPost = (post) => {
    setPosts((p) => [...p, { ...post }]);
  };

  const addTitle = (title) => {
    setTitles((t) => [...t, { ...title }]);
  };

  const updatePost = (posts) => {
    setPosts(posts);
  };
  const updateTitle = (titles) => {
    setTitles(titles);
  };

  const deletePost = (id) => {
    setPosts([...posts.filter((p) => p.id !== id)]);
    setTitles([...titles.filter((t) => t.id !== id)]);
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
        <Post posts={posts} deletePost={deletePost} />
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
