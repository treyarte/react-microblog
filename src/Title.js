import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({ title }) => {
  return (
    <div className='title'>
      <Link to={`/posts/${title.id}`}>
        <h4>{title.title}</h4>
      </Link>
      <p>{title.description}</p>
    </div>
  );
};

export default Title;
