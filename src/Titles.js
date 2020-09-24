import React from 'react';
import Title from './Title';
const Titles = ({ titles }) => {
  return (
    <div className='titles-container'>
      {titles.length > 0 ? (
        titles.map((title) => <Title key={title.id} title={title} />)
      ) : (
        <p>Sorry, No post at this time</p>
      )}
    </div>
  );
};

export default Titles;
