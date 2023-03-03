import React from 'react';
import { render } from '@testing-library/react';
import { Login } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login Component', () => {
  test('', () => {
    render(
      <Router>
        <Login />
      </Router>,
    );
  });
});
