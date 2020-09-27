import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  CardText,
} from 'reactstrap';
import './Title.css';

const Title = ({ title, id, voteTitle }) => {
  const handleVote = (e) => {
    const name = e.target.getAttribute('name');
    console.log(title);
    voteTitle(title.id, name);
  };

  return (
    <Card className='title'>
      <CardBody>
        <Link to={`/posts/${id}`}>
          <h4>{title.title}</h4>
        </Link>

        <p className='float-left'>{title.description}</p>
      </CardBody>
      <CardFooter>
        <div className='row'>
          <div className='col-md-4'>
            <span
              onClick={handleVote}
              name='up'
              className='far fa-thumbs-up text-primary'
            ></span>
          </div>
          <div className='col-md-4'>
            <span>{title.votes}</span>
          </div>
          <div className='col-md-4'>
            <span
              onClick={handleVote}
              name='down'
              className='far fa-thumbs-down text-danger'
            ></span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Title;
