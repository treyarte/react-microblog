import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Post = ({ id, post, deletePost }) => {
  return (
    <div className='post'>
      <h4>{post.title}</h4>
      <div className='description'>
        <span>{post.description}</span>
        <Link to={`/posts/${id}/update`}>Update</Link>
        <Button onClick={() => deletePost(id)} color='danger'>
          Delete
        </Button>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
