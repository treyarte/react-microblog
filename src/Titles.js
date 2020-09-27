import React from 'react';
import Title from './Title';
const Titles = ({ titles: { titles }, voteTitle }) => {
  return (
    <div className='titles-container'>
      {Object.keys(titles).length > 0 ? (
        Object.entries(titles).map(([key, title]) => (
          <Title key={key} title={title} id={key} voteTitle={voteTitle} />
        ))
      ) : (
        <p>Sorry, No post at this time</p>
      )}
    </div>
  );
};

export default Titles;
