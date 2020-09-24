import React from 'react';

const Comment = ({ comment, deleteComment, postId }) => {
  return (
    <div>
      <p>{comment.text}</p>
      <button onClick={() => deleteComment(postId, comment)}>X</button>
    </div>
  );
};

export default Comment;
