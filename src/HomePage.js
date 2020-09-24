import React from 'react';
import Titles from './Titles';

const HomePage = ({ titles }) => {
  return (
    <>
      <div className='home-page'>
        <Titles titles={titles} />
      </div>
    </>
  );
};

export default HomePage;
