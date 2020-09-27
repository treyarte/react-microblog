import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({ title, id, voteTitle }) => {
  const handleVote = (e) => {
    const name = e.target.getAttribute('name');
    console.log(title);
    voteTitle(title.id, name);
  };

  return (
    <div className='title'>
      <Link to={`/posts/${id}`}>
        <h4>{title.title}</h4>
      </Link>
      <p>{title.description}</p>
      <div>
        <span
          onClick={handleVote}
          name='up'
          className='far fa-thumbs-up mr-5'
        ></span>
        <span>{title.votes}</span>
        <span
          onClick={handleVote}
          name='down'
          className='far fa-thumbs-down'
        ></span>
      </div>
    </div>
  );
};

export default Title;
