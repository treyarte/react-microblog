import React from 'react';
import { v4 as uuid } from 'uuid';
import PostForm from './PostForm';

const AddPost = ({ addPost, addTitle }) => {
  const createPost = (formData) => {
    const id = uuid();
    addPost({ ...formData, id });
    addTitle({ title: formData.title, description: formData.description, id });
  };

  return (
    <>
      <PostForm submitAction={createPost} />
    </>
  );
};

export default AddPost;
