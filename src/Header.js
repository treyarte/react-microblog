import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import './Header.css';
const Header = () => {
  return (
    <Jumbotron>
      <h1>Microblog</h1>
      <h4 className='lead'>Get in the Rithm of blogging!</h4>
      <hr className='my-2' />
      <Link to='/'>Blog</Link>
      <Link to='/new'>Add a new post</Link>
    </Jumbotron>
  );
};

export default Header;
