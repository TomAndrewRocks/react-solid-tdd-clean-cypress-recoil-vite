import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FC,
} from 'react';
import { InputContainer } from './styles';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const TextInput: FC<InputProps> = (
  props: InputProps,
) => {
  const enableInput = (
    event: React.FocusEvent<HTMLInputElement>,
  ): void => {
    event.target.readOnly = false;
  };

  return (
    <InputContainer>
      <input {...props} readOnly onFocus={enableInput} />
    </InputContainer>
  );
};
