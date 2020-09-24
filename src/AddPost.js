import React from 'react';
import { v4 as uuid } from 'uuid';
import PostForm from './PostForm';

const AddPost = ({ addPost, addTitle }) => {
  const createPost = (formData) => {
    const id = uuid();
    addPost({ [id]: { ...formData, comments: [] } });
    addTitle({
      [id]: { title: formData.title, description: formData.description },
    });
  };

  return (
    <>
      <PostForm submitAction={createPost} />
    </>
  );
};

export default AddPost;
