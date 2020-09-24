import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Post from './Post';
import Comment from './Comment';
import CommentForm from './CommentForm';

const PostPage = ({
  posts: { posts },
  deletePost,
  addComment,
  deleteComment,
}) => {
  const { id } = useParams();

  const post = posts[id];
  if (!post) return <Redirect to='/' />;

  const postComments = post.comments || [];
  console.log(postComments);
  return (
    <div className='post-page container'>
      <Post id={id} post={post} deletePost={deletePost} />
      {postComments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
          postId={id}
        />
      ))}
      <CommentForm addComment={addComment} post_id={id} />
    </div>
  );
};

export default PostPage;
