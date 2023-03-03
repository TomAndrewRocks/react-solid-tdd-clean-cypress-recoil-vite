import React, { ReactElement, useState } from 'react';
import { Form, Router } from './styles';
import { Link } from 'react-router-dom';
import { TextInput } from '../../Input';
import { FormStatus } from '../Status';
import { FormContext } from '../../../contexts/FormContext';

interface FormProps {
  link: string;
  path: string;
  title: string;
}

export const SignForm = (
  props: FormProps,
): ReactElement => {
  const [state] = useState({
    isLoading: false,
    errorMessage: '',
  });

  const [errorState] = useState({
    emailError: 'Required Field',
    passwordError: 'Required Field',
  });

  return (
    <FormContext.Provider value={{ state, errorState }}>
      <Form>
        <h2>{props.title}</h2>
        <div>
          <TextInput
            data-testid="email"
            type="email"
            name="email"
            title="Required field"
            placeholder="Type your email"
          />
        </div>
        <div>
          <TextInput
            data-testid="password"
            type="password"
            title="Required field"
            name="password"
            placeholder="Type your password"
          />
        </div>
        <button data-testid="submit" disabled>
          Submit
        </button>
        <Router>
          <Link to={props.path}>{props.link}</Link>
        </Router>
        <FormStatus />
      </Form>
    </FormContext.Provider>
  );
};
