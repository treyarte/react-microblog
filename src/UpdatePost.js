import React from 'react';
import { useParams } from 'react-router-dom';
import PostForm from './PostForm';

const UpdatePost = ({ posts, titles, updatePost, updateTitle }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const updatePostAction = (formData) => {
    const i = posts.findIndex((p) => p.id === id);
    const tIndx = titles.findIndex((t) => t.id === id);

    posts[i].title = formData.title;
    titles[tIndx].title = formData.title;
    posts[i].description = formData.description;
    titles[tIndx].description = formData.description;
    posts[i].body = formData.body;
    titles[tIndx].body = formData.body;

    updatePost(posts);
    updateTitle(titles);
  };

  return (
    <>
      <PostForm submitAction={updatePostAction} initState={post} />
    </>
  );
};

export default UpdatePost;
