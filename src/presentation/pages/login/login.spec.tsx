import React from 'react';
import {
  render,
  RenderResult,
} from '@testing-library/react';
import { Login } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(
    <Router>
      <Login />
    </Router>,
  );
  return {
    sut,
  };
};

describe('Login Component', () => {
  test('should start with initial state', () => {
    const { sut } = makeSut();
    const errorWrap = sut.getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);
    const submitButton = sut.getByTestId(
      'submit',
    ) as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    const emailStatus = sut.getByTestId('email');
    expect(emailStatus.title).toBe('Required field');
    const passwordStatus = sut.getByTestId('password');
    expect(passwordStatus.title).toBe('Required field');
  });
});
