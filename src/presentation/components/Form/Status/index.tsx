import React, { ReactElement, useContext } from 'react';
import { Status } from './styles';
import { FormContext } from '../../../contexts/FormContext';

export const FormStatus = (): ReactElement => {
  const { isLoading, errorMessage } =
    useContext(FormContext);
  return (
    <Status data-testid="error-wrap">
      {isLoading && <span>Loading...</span>}
      {errorMessage && <span>Error</span>}
    </Status>
  );
};
