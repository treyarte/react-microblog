import React, { useState } from 'react';

import { Form, Button, Input, FormGroup, Label } from 'reactstrap';

const CommentForm = ({ addComment, post_id }) => {
  const INITIAL_STATE = {
    text: '',
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ ...formData }, post_id);
    setFormData(INITIAL_STATE);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor='text'>Comment</Label>
        <Input
          type='textarea'
          id='text'
          name='text'
          value={formData.text}
          onChange={handleChange}
        />
      </FormGroup>
      <Button color='primary'>Submit</Button>
    </Form>
  );
};

export default CommentForm;
