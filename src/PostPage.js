import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPostFromAPI, startLoad } from './actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import Comment from './Comment';
import CommentForm from './CommentForm';

const PostPage = ({ deletePost, addComment, deleteComment, votePost }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostFromAPI(id));
  }, [dispatch, id]);

  const { posts } = useSelector((state) => state.posts);

  const post = posts[id];
  // if (!post) return <Redirect to='/' />;

  return (
    <div className='post-page container'>
      {post ? (
        <Post
          id={id}
          post={post}
          deletePost={deletePost}
          deleteComment={deleteComment}
          addComment={addComment}
          votePost={votePost}
        />
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostPage;
