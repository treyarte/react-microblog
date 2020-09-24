import React from 'react';
import { useParams } from 'react-router-dom';
import PostForm from './PostForm';

const UpdatePost = ({
  posts: { posts },
  titles: { titles },
  updatePost,
  updateTitle,
}) => {
  const { id } = useParams();
  const post = posts[id];
  const updatePostAction = (formData) => {
    posts[id].title = formData.title;
    titles[id].title = formData.title;
    posts[id].description = formData.description;
    titles[id].description = formData.description;
    posts[id].body = formData.body;
    titles[id].body = formData.body;

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
