import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Input, FormGroup, Label } from 'reactstrap';

const PostForm = ({ submitAction, initState }) => {
  const INITIAL_STATE = initState
    ? initState
    : {
        title: '',
        description: '',
        body: '',
      };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAction(formData);
    history.push('/');
  };

  const cancel = () => {
    history.push('/');
  };

  return (
    <div className='container'>
      <Form className='row  text-left' onSubmit={handleSubmit}>
        <FormGroup className='col-md-12'>
          <Label htmlFor='title'>Title:</Label>
          <Input
            type='text'
            name='title'
            id='title'
            value={formData.title}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className='col-md-12'>
          <Label htmlFor='description'>Description:</Label>
          <Input
            type='text'
            name='description'
            id='description'
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className='col-md-12'>
          <Label htmlFor='body'>Body:</Label>
          <Input
            type='textarea'
            name='body'
            id='body'
            value={formData.body}
            onChange={handleChange}
          />
        </FormGroup>
        <div className='col-md-12'>
          <Button className='mr-3' color='primary' type='submit'>
            Save
          </Button>
          <Button color='secondary' onClick={cancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
