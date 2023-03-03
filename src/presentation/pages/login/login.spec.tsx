import React from 'react';
import { render } from '@testing-library/react';
import { Login } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login Component', () => {
  test('should start with initial state', () => {
    const { getByTestId } = render(
      <Router>
        <Login />
      </Router>,
    );
    const errorWrap = getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);
    const submitButton = getByTestId(
      'submit',
    ) as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    const emailStatus = getByTestId('email');
    expect(emailStatus.title).toBe('Required field');
    const passwordStatus = getByTestId('password');
    expect(passwordStatus.title).toBe('Required field');
  });
});
