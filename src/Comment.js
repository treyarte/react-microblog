import React from 'react';

const Comment = ({ comment, deleteComment, postId }) => {
  return (
    <li>
      <p className='comment'>
        {comment.text}

        <span
          class='fas fa-window-close ml-3 text-danger'
          onClick={() => deleteComment(postId, comment)}
        ></span>
      </p>
    </li>
  );
};

export default Comment;
