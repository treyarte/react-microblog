import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Post = ({ id, post, deletePost, deleteComment, addComment }) => {
  const history = useHistory();

  const handlePostDelete = (e) => {
    deletePost(id);
    history.push('/');
  };
  return (
    <>
      <div className='post'>
        <h4>{post.title}</h4>
        <div className='description'>
          <span>{post.description}</span>
          <Link to={`/posts/${id}/update`}>Update</Link>
          <Button onClick={handlePostDelete} color='danger'>
            Delete
          </Button>
        </div>
        <p>{post.body}</p>
      </div>
      {post.comments !== undefined &&
        post.comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
            postId={id}
          />
        ))}

      <CommentForm addComment={addComment} post_id={id} />
    </>
  );
};

export default Post;
