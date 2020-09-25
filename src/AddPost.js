import React from 'react';
import { v4 as uuid } from 'uuid';
import PostForm from './PostForm';

const AddPost = ({ addPost, addTitle }) => {
  const createPost = (formData) => {
    addPost({ ...formData });
  };

  return (
    <>
      <PostForm submitAction={createPost} />
    </>
  );
};

export default AddPost;
