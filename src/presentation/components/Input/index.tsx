import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FC,
  useContext,
} from 'react';
import { InputContainer } from './styles';
import { FormContext } from '../../contexts/FormContext';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const TextInput: FC<InputProps> = (
  props: InputProps,
) => {
  const { errorState } = useContext(FormContext);
  const error = errorState[props.name];
  const enableInput = (
    event: React.FocusEvent<HTMLInputElement>,
  ): void => {
    event.target.readOnly = false;
  };

  return (
    <InputContainer>
      <input {...props} readOnly onFocus={enableInput} />
      <span
        data-testid={`${props.name}-status`}
        title={error}
      ></span>
    </InputContainer>
  );
};
