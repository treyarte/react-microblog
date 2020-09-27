import React from 'react';
import Titles from './Titles';

const HomePage = ({ titles, voteTitle }) => {
  return (
    <>
      <div className='home-page'>
        <Titles titles={titles} voteTitle={voteTitle} />
      </div>
    </>
  );
};

export default HomePage;
