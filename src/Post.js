import React from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Post = ({ posts, deletePost }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <Redirect to='/' />;

  return (
    <div>
      <h4>{post.title}</h4>
      <div className='description'>
        <span>{post.description}</span>
        <Link to={`/posts/${post.id}/update`}>Update</Link>
        <Button onClick={() => deletePost(post.id)} color='danger'>
          Delete
        </Button>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
