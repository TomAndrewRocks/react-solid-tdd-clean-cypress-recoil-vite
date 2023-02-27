/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Stack, Flex } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { SignForm } from '../../components/Form/SignForm/index';

type LoginFormInputs = {
  email: string;
  password: string;
};

const resolver: Resolver<LoginFormInputs> = (values) => {
  return {
    values:
      !values.email.trim() || !values.password.trim()
        ? {}
        : values,
    errors: !values.email
      ? {
          email: {
            type: 'required',
            message: 'E-mail is required.',
          },
        }
      : !values.password
      ? {
          password: {
            type: 'required',
            message: 'Password is required.',
          },
        }
      : {},
  };
};

export const Login: FC = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: resolver,
  });

  const onSubmit = handleSubmit((data) => {
    reset();
    alert(JSON.stringify(data));
  });

  return (
    <Stack height={'100vh'} bg={'cyan.600'} p={100}>
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        mt={100}
      >
        <SignForm
          onSubmit={onSubmit}
          errors={errors}
          register={register}
          path={'/register'}
          text={'Dont have an account yet? Sign up here!'}
        />
      </Flex>
    </Stack>
  );
};