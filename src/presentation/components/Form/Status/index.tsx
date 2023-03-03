import React, { ReactElement } from 'react';
import { Status } from './styles';

export const FormStatus = (): ReactElement => {
  return (
    <Status>
      <span>Loading...</span>
      <span>Error</span>
    </Status>
  );
};
