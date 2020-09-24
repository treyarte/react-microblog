import React from 'react';
import Title from './Title';
const Titles = ({ titles: { titles } }) => {
  return (
    <div className='titles-container'>
      {Object.keys(titles).length > 0 ? (
        Object.entries(titles).map(([key, title]) => (
          <Title key={key} title={title} id={key} />
        ))
      ) : (
        <p>Sorry, No post at this time</p>
      )}
    </div>
  );
};

export default Titles;
