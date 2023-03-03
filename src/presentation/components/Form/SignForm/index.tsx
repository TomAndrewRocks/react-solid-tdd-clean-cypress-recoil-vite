import React, { ReactElement } from 'react';
import { Form, Router } from './styles';
import { Link } from 'react-router-dom';
import { TextInput } from '../../Input';
import { FormStatus } from '../Status';

interface FormProps {
  link: string;
  path: string;
  title: string;
}

export const SignForm = (
  props: FormProps,
): ReactElement => {
  return (
    <Form>
      <h2>{props.title}</h2>
      <div>
        <TextInput
          type="email"
          name="email"
          placeholder="Type your email"
        />
      </div>
      <div>
        <TextInput
          type="password"
          name="password"
          placeholder="Type your password"
        />
      </div>
      <button>Submit</button>
      <Router>
        <Link to={props.path}>{props.link}</Link>
      </Router>
      <FormStatus />
    </Form>
  );
};
