import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import './Post.css';

const Post = ({
  id,
  post,
  deletePost,
  deleteComment,
  addComment,
  votePost,
}) => {
  const history = useHistory();

  const handlePostDelete = (e) => {
    deletePost(id);
    history.push('/');
  };

  const handleVote = (e) => {
    const name = e.target.getAttribute('name');

    votePost(post.id, name);
  };

  return (
    <>
      <div className='post row text-left'>
        <div className='col-md-12 '>
          <h4>{post.title}</h4>

          <span className='votes'>Votes: {post.votes}</span>
          <span
            onClick={handleVote}
            name='up'
            className='far fa-thumbs-up text-primary mr-2'
          ></span>
          <span
            onClick={handleVote}
            name='down'
            className='far fa-thumbs-down text-danger'
          ></span>
        </div>

        <div className='col-md-12 '>
          <p>{post.description}</p>

          <Link
            to={`/posts/${id}/update`}
            className='far fa-edit text-info mr-3'
          ></Link>
          <span
            onClick={handlePostDelete}
            className='far fa-trash-alt text-danger'
          ></span>
        </div>
        <div className='col-md-12'>
          <p>{post.body}</p>
        </div>
      </div>
      <hr />
      <div className='comments row text-left'>
        <div className='col-md-12'>
          <h4>Comments</h4>
          <ul>
            {post.comments !== undefined &&
              post.comments.map((comment) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  deleteComment={deleteComment}
                  postId={id}
                />
              ))}
          </ul>
        </div>
        <div className='col-md-12'>
          <CommentForm addComment={addComment} post_id={id} />
        </div>
      </div>
    </>
  );
};

export default Post;
