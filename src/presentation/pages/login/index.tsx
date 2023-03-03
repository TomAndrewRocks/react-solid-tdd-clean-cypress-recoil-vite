import React, { ReactElement } from 'react';
import { SignForm } from '../../components/Form/SignForm';
import { LayoutContainer } from './../../components/Layout/index';

export const Login = (): ReactElement => {
  return (
    <LayoutContainer>
      <SignForm
        title="Login"
        path="/register"
        link="Sign Up"
      />
    </LayoutContainer>
  );
};
